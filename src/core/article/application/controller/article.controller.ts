import { Controller, Get, Post, Body } from '@nestjs/common';
import { ArticleAppService } from '../service/articleapp.service';
import { ArticleForm } from '../form/article_form';

@Controller('article')
export class ArticleController {
  constructor(private readonly appService: ArticleAppService) {}

  @Post('createArticle')
  async createArticle(@Body() articleForm: ArticleForm): Promise<string>{
    let form = new ArticleForm(articleForm);
    
    return await this.appService.createArticle(form);
  }
}
