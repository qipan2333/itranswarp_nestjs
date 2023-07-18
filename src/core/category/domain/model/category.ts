import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryParams } from '../params/category_params';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  private id: string;

  @Column({ nullable: false, length: 100 })
  private name: string;

  @Column({ nullable: false, length: 32 })
  private tag: string;

  @Column({ nullable: false, length: 1000 })
  private description: string;

  @Column({ nullable: false })
  private displayOrder: number;

  @Column({ nullable: false })
  private createdAt: number;

  @Column()
  private updatedAt: number;

  constructor(displayOrder: number, params?: CategoryParams) {
    if(params) {
      this.name = params.getName();
      this.tag = params.getTags();
      this.description = params.getDescription();
      this.createdAt = new Date().getTime();
      this.displayOrder = displayOrder;
    }
  }
}
