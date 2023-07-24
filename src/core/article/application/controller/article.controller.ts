import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ArticleAppService } from '../service/articleapp.service';
import { ArticleForm } from '../form/article_form';
import { ArticleUi } from '../ui/article_ui';

@Controller('article')
export class ArticleController {
  constructor(private readonly appService: ArticleAppService) {}

  @Post('createArticle')
  async createArticle(@Body() articleForm: ArticleForm): Promise<string>{
    let form = new ArticleForm(articleForm);
    
    return await this.appService.createArticle(form);
  }

  @Get('getArticle')
  async getArticle(@Param() params: any): Promise<ArticleUi>{
    return await this.appService.getArticleById(params.id);
  }
}
