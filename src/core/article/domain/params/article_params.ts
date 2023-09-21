export interface ArticleParams {
  getId(): string;

  getCategoryId(): string;

  getTags(): string;

  getName(): string;

  getDescription(): string;

  getUserId(): string;

  getContent(): string;
}
