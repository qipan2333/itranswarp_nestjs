import { Injectable } from '@nestjs/common';
import { Category } from '../../domain/model/category';
import { ArticleService } from '../../domain/service/article_service';
import { ArticleForm } from '../form/article_form';
import { Article } from '../../domain/model/article';

@Injectable()
export class ArticleAppService {
 
  constructor(private articleService :ArticleService) {

  }

  public async createArticle(articleForm: ArticleForm): Promise<string> {
    let article: Article = await this.articleService.createArticle(articleForm).then();
    if(article !== null) {
        return article.id;
    }
    return '';
    
  }
}

