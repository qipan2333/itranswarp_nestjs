import { Injectable } from '@nestjs/common';
import { Article } from '../model/article';
import { ArticleParams } from '../params/article_params';
import { QueryRunner, Repository } from 'typeorm';
import { TextContent } from '../model/text_content';
import { TransactionWrapper } from 'src/common/transaction/transaction.wrapper';
import { InjectRepository } from '@nestjs/typeorm';
import { sha256 } from 'hash-wasm';

@Injectable()
export class ArticleService {
  constructor(
    private transactionWrapper: TransactionWrapper,
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  public async createOrUpdateArticle(params: ArticleParams): Promise<Article> {
    return this.transactionWrapper.wrapper(params, null, this.createOrUpdate);
  }

  private async createOrUpdate(
    queryRunner: QueryRunner,
    params: ArticleParams,
  ) {
    let article: Article;
    if (!params.getId()) {
      article = new Article(params);
    } else {
      article = await this.findArticleById(params.getId());
    }
    if (params.getContent()) {
      const hash = await sha256(params.getContent());
      const textContent = new TextContent(hash, params.getContent());
      await queryRunner.manager.save(textContent);
      article.textSaved(textContent.getId());
    }
    await queryRunner.manager.save(article);
    return article;
  }

  public async findArticleById(id: string): Promise<Article | null> {
    const article = this.articleRepository.findOneBy({ _id: id });
    if (article) {
      return article;
    } else {
      throw new Error(`Article with id = ${id} not found`);
    }
  }
}
