import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './domain/model/category';
import { CategoryService } from './domain/service/category_service';
import { CategoryController } from './application/controller/category.controller';
import { CategoryAppService } from './application/service/category.appservice';
import { CommonModule } from '../../common/common.module';
import { TransactionWrapper } from '../../common/transaction/transaction.wrapper';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), CommonModule],
  controllers: [CategoryController],
  providers: [CategoryAppService, CategoryService, TransactionWrapper],
})
export class CategoryModule {}
