import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TextContent {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  _id: string;

  @Column({ name: 'hash', nullable: false, length: 64 })
  _hash: string;

  @Column({ name: 'content', nullable: false })
  _content: string;

  @Column({ name: 'createdAt', nullable: false })
  _createdAt: number;

  @Column({ name: 'updatedAt' })
  _updatedAt: number;

  @Column({ name: 'version', nullable: false, default: 0 })
  _version: number;

  constructor(hash: string, content: string) {
    this._hash = hash;
    this._content = content;
    this._createdAt = new Date().getTime();
  }

  public getId(): string {
    return this._id;
  }

  public getContent(): string {
    return this._content;
  }
}
