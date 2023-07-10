import { Injectable } from '@nestjs/common';
import { Article } from '../model/article';
import { ArticleParams } from '../params/article_params';
import { DataSource } from 'typeorm';
import { TextContent } from '../model/text_content';
import { randomUUID } from 'crypto';

@Injectable()
export class ArticleService {
    
    constructor(private dataSource :DataSource) {

    }
    
    public async createArticle(params :ArticleParams): Promise<Article> {
        
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            let textContent = new TextContent(Math.random().toString(), "sssssssss");
            await queryRunner.manager.save(textContent);
            let article = new Article(params);
            article.textSaved(textContent.getId());
            await queryRunner.manager.save(article);
            queryRunner.commitTransaction;
            return article;
        } catch(err) {
            console.log(err);
            await queryRunner.rollbackTransaction();
            return null;
        } finally {
            await queryRunner.release();
        }
    }

}