import { Module } from '@nestjs/common';
import { ArticleAppService } from './application/service/articleapp.service';
import { ArticleController } from './application/controller/article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './domain/model/article';
import { TextContent } from './domain/model/text_content';
import { ArticleService } from './domain/service/article_service';
import { CommonModule } from 'src/common/common.module';
import { TransactionWrapper } from 'src/common/transaction/transaction.wrapper';
@Module({
  imports: [TypeOrmModule.forFeature([Article, TextContent]), CommonModule],
  controllers: [ArticleController],
  providers: [ArticleAppService, ArticleService, TransactionWrapper],
})
export class ArticleModule {}
