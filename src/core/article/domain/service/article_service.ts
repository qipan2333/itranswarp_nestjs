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
    
    constructor(private transactionWrapper: TransactionWrapper,
        @InjectRepository(Article)
        private articleRepository: Repository<Article>) {

    }
    
    public async createArticle(params :ArticleParams): Promise<Article> {
        return this.transactionWrapper.wrapper(params, null, this.create);
    }

    private async create(queryRunner: QueryRunner, params :ArticleParams) {
        const hash = await sha256(params.getContent());
        let textContent = new TextContent(hash, params.getContent());
        await queryRunner.manager.save(textContent);
        let article = new Article(params);
        article.textSaved(textContent.getId());
        await queryRunner.manager.save(article);
        return article;
    }

    public async findArticleById(id: string): Promise<Article | null> {
        return this.articleRepository.findOneBy({ _id: id });
    }
}