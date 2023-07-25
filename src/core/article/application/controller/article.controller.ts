import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ArticleAppService } from '../service/articleapp.service';
import { ArticleForm } from '../form/article_form';
import { ArticleUi } from '../ui/article_ui';
import { HttpResponse } from 'src/common/http_response';

@Controller('article')
export class ArticleController {
  constructor(private readonly appService: ArticleAppService) {}

  @Post('createOrArticle')
  async createOrUpdateArticle(@Body() articleForm: ArticleForm): Promise<HttpResponse<string>>{
    
    try {
      let form = new ArticleForm(articleForm);
      const id =  await this.appService.createOrUpdateArticle(form);
      return new HttpResponse<string>(id);
    } catch(err) {
      return new HttpResponse(null, err);
    }
  }

  @Get('getArticle')
  async getArticle(@Query() params: any): Promise<HttpResponse<ArticleUi>>{
    try {
      const articleUi = await this.appService.getArticleById(params.id)
      return new HttpResponse<ArticleUi>(articleUi);
    } catch(err) {
      return new HttpResponse(null, err);
    }
  }
}
