import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleParams } from '../params/article_params';

@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 36 })
  userId: string;

  @Column({ nullable: false, length: 36 })
  categoryId: string;

  @Column({ nullable: false, length: 36 })
  imageId: string;

  @Column({ nullable: false, length: 36 })
  textId: string;

  @Column({ nullable: false })
  views: number = 0;

  @Column({ nullable: false, length: 100 })
  tags: string;

  @Column({ nullable: false, length: 100 })
  name: string;

  @Column({ nullable: false, length: 1000 })
  description: string;

  @Column()
  publishAt: number;

  @Column({ nullable: false })
  createdAt: number;

  @Column()
  updatedAt: number;

  @Column({ nullable: false })
  version: number = 0;

  constructor(params?: ArticleParams) {
    if(params) {
      this.name = params.getName();
      this.userId = params.getUserId();
      this.categoryId = params.getCategoryId();
      this.tags = params.getTags();
      this.description = params.getDescription();
      this.createdAt = new Date().getTime();
    }
  }
  
  public textSaved(textId: string) {
    this.textId = textId;
  }
}
