import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryParams } from '../params/category_params';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public _id: string;

  @Column({ name: 'name', nullable: false, length: 100 })
  public _name: string;

  @Column({ name: 'tag', nullable: false, length: 32 })
  public _tag: string;

  @Column({ name: 'description', nullable: false, length: 1000 })
  public _description: string;

  @Column({ name: 'displayOrder', nullable: false })
  public _displayOrder: number;

  @Column({ name: 'createdAt', nullable: false })
  public _createdAt: number;

  @Column({ name: 'updatedAt' })
  public _updatedAt: number;

  constructor(displayOrder: number, params?: CategoryParams) {
    if(params) {
      this._name = params.getName();
      this._tag = params.getTags();
      this._description = params.getDescription();
      this._createdAt = new Date().getTime();
      this._displayOrder = displayOrder;
    }
  }

  public getId(): String {
    return this._id;
  }

  public getDisplayOrder(): number {
    return this._displayOrder;
  }
}
