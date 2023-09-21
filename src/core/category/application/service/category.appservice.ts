import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { CategoryService } from '../../domain/service/category_service';
import { CategoryForm } from '../form/category_form';

@Injectable()
export class CategoryAppService {
  constructor(
    private readonly categoryService: CategoryService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  public async createCategory(categoryForm: CategoryForm): Promise<string> {
    this.logger.info('start create article');
    const category = await this.categoryService
      .createCategory(categoryForm)
      .then();
    if (category !== null) {
      this.logger.info(
        'start create category succeed, id = ' + category.getId(),
      );
      return category.getId();
    }
    this.logger.error('start create category failed');
    return '';
  }
}
