import { Injectable } from '@nestjs/common';
import { QueryRunner, Repository } from 'typeorm';
import { Category } from '../model/category';
import { CategoryParams } from 'src/core/article/domain/params/category_params';
import { TransactionWrapper } from 'src/common/transaction/transaction.wrapper';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    private transactionWrapper: TransactionWrapper,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  public async createCategory(params: CategoryParams): Promise<Category> {
    return this.transactionWrapper.wrapper(
      params,
      null,
      async (queryRunner: QueryRunner, params: CategoryParams) => {
        const categories = await queryRunner.manager.find(Category);
        const displayOrder =
          categories.length === 0
            ? 0
            : Math.max(...categories.map((c) => c.getDisplayOrder())) + 1;
        const category = new Category(displayOrder, params);
        await queryRunner.manager.save(category);
        return category;
      },
    );
  }

  public async findCategoryById(id: string): Promise<Category | null> {
    return this.categoryRepository.findOneBy({ _id: id });
  }
}
