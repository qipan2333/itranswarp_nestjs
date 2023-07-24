import { MyUtil } from "src/common/my_util";
import { Article } from "../../domain/model/article";

export class ArticleUi {
  id: string;

  userId: string;

  categoryId: string;

  imageId: string;

  textId: string;

  views: number;

  tags: string;

  name: string;

  description: string;

  publishAt: number;

  createdAt: number;

  updatedAt: number;

  version: number;

  constructor(article? :Article) {
    if(article) {
        MyUtil.copy_field(article, this);
    }
  }
}