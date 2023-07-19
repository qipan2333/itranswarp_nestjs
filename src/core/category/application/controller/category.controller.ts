import { Body, Controller, Post } from '@nestjs/common';
import { CategoryAppService } from '../service/category.appservice';
import { CategoryForm } from '../form/category_form';

@Controller('category')
export class CategoryController {
  constructor(private readonly appService: CategoryAppService) {
  }

  @Post('createCategory')
  async createArticle(@Body() articleForm: CategoryForm): Promise<string>{
    const form = new CategoryForm(articleForm);
    return await this.appService.createCategory(form);
  }
}