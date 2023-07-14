import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryAppService } from '../service/category.service';

@Controller('article')
export class CategoryController {
  constructor(private readonly appService: CategoryAppService) {}

  // @Post('createArticle')
  // async createArticle(@Body() articleForm: ArticleForm): Promise<string>{
  //   let form = new ArticleForm(articleForm);
    
  //   return await this.appService.createArticle(form);
  // }
}
