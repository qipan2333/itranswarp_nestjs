import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TextContent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, length: 64 })
  hash: string;

  @Column({ nullable: false })
  content: string;

  @Column({ nullable: false })
  createdAt: number;

  @Column()
  updatedAt: number;

  @Column({ nullable: false })
  version = 0;

  constructor(hash: string, content: string) {
    this.hash = hash;
    this.content = content;
    this.createdAt = new Date().getTime();
  }

  public getId(): string {
    return this.id;
  }
}
