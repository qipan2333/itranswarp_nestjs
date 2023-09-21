import { Article } from '../../domain/model/article';

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

  constructor(article: Article) {
    this.id = article.getId();
    this.userId = article.getUserId();
    this.categoryId = article.getCategoryId();
    this.imageId = article.getImageId();
    this.textId = article.getTextId();
    this.views = article.getViews();
    this.tags = article.getTags();
    this.name = article.getName();
    this.description = article.getDescription();
    this.publishAt = article.getPublishAt();
    this.createdAt = article.getCreatedAt();
    this.updatedAt = article.getUpdateAt();
    this.version = article.getVersion();
  }
}
