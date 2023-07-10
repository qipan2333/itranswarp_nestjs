import { Module } from '@nestjs/common';
import { ArticleAppService } from './application/service/articleapp.service';
import { ArticleController } from './application/controller/article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './domain/model/article';
import { Category } from './domain/model/category';
import { TextContent } from './domain/model/text_content';
import { ArticleService } from './domain/service/article_service';
@Module({
  imports: [TypeOrmModule.forFeature([Article, TextContent, Category])],
  controllers: [ArticleController],
  providers: [ArticleAppService, ArticleService],
})
export class ArticleModule {}
