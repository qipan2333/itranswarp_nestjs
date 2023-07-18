import { Injectable } from '@nestjs/common';
import { Article } from '../model/article';
import { ArticleParams } from '../params/article_params';
import { QueryRunner } from 'typeorm';
import { TextContent } from '../model/text_content';
import { TransactionWrapper } from 'src/common/transaction/transaction.wrapper';

@Injectable()
export class ArticleService {
    
    constructor(private transactionWrapper: TransactionWrapper) {

    }
    
    public async createArticle(params :ArticleParams): Promise<Article> {
        return this.transactionWrapper.wrapper(params, null, this.create);
    }

    private async create(queryRunner: QueryRunner, params :ArticleParams) {
        let textContent = new TextContent(Math.random().toString(), "sssssssss");
            await queryRunner.manager.save(textContent);
            let article = new Article(params);
            article.textSaved(textContent.getId());
            await queryRunner.manager.save(article);
            return article;
    }
}