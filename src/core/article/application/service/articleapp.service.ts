import { Inject, Injectable } from '@nestjs/common';
import { Category } from '../../domain/model/category';
import { ArticleService } from '../../domain/service/article_service';
import { ArticleForm } from '../form/article_form';
import { Article } from '../../domain/model/article';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class ArticleAppService {
 
  constructor(private readonly articleService :ArticleService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {

  }

  public async createArticle(articleForm: ArticleForm): Promise<string> {
    this.logger.info("start create article");
    let article: Article = await this.articleService.createArticle(articleForm).then();
    if(article !== null) {
      this.logger.info("start create article succeed, id = " + article.id);
        return article.id;
    }
    this.logger.error("start create article failed");
    return ''; 
  }
}

