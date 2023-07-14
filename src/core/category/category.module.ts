import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './domain/model/category';
import { CategoryController } from './application/controller/article.controller';
import { CategoryAppService } from './application/service/category.service';
import { CategoryService } from './domain/service/category_service';

@Module({
  imports: [TypeOrmModule.forFeature([ Category])],
  controllers: [CategoryController],
  providers: [CategoryAppService, CategoryService],
})
export class CategoryModule {}
