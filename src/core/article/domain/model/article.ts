import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleParams } from '../params/article_params';

@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  _id: string;

  @Column({ name: 'userId', nullable: false, length: 36 })
  _userId: string;

  @Column({ name: 'categoryId', nullable: false, length: 36 })
  _categoryId: string;

  @Column({ name: 'imageId', nullable: false, length: 36 })
  _imageId: string;

  @Column({ name: 'textId', nullable: false, length: 36 })
  _textId: string;

  @Column({ name: 'views', nullable: false })
  _views: number = 0;

  @Column({ name: 'tags', nullable: false, length: 100 })
  _tags: string;

  @Column({ name: 'name', nullable: false, length: 100 })
  _name: string;

  @Column({ name: 'description', nullable: false, length: 1000 })
  _description: string;

  @Column({ name: 'publishAt' })
  _publishAt: number;

  @Column({ name: 'createdAt', nullable: false })
  _createdAt: number;

  @Column( { name: 'updatedAt' })
  _updatedAt: number;

  @Column({ name: 'version', nullable: false })
  _version: number = 0;

  constructor(params?: ArticleParams) {
    if(params) {
      this._name = params.getName();
      this._userId = params.getUserId();
      this._categoryId = params.getCategoryId();
      this._tags = params.getTags();
      this._description = params.getDescription();
      this._createdAt = new Date().getTime();
    }
  }

  getId(): string {
    return this._id;
  }
  public textSaved(textId: string) {
    this._textId = textId;
  }
}
