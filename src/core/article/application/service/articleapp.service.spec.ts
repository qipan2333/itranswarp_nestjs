import { Test, TestingModule } from '@nestjs/testing';
import { ArticleAppService } from './articleapp.service';
import { ArticleService } from '../../domain/service/article_service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../../domain/model/article';
import { TextContent } from '../../domain/model/text_content';
import { ArticleModule } from '../../article.module';
import { CommonModule } from 'src/common/common.module';

describe('ArticleAppService', () => {
  let articleAppService: ArticleAppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ArticleModule, CommonModule],
      providers: [],
    }).compile();

    articleAppService = app.get<ArticleAppService>(ArticleAppService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(articleAppService.mdToHtml('# aaa')).toBe('Hello World!');
    });
  });
});
