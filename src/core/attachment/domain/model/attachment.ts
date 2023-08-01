import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AttachmentParams } from '../params/attachment_params';

@Entity()
export class Attachment {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public _id: string;

  @Column({ name: 'name', nullable: false, length: 100 })
  public _name: string;

  @Column({ name: 'userId', nullable: false, length: 32 })
  public _userId: string;

  @Column({ name: 'mime', nullable: false, length: 100 })
  public _mime: string;

  @Column({ name: 'size', nullable: false })
  public _size: number;

  @Column({ name: 'width', nullable: false })
  public _width: number;

  @Column({ name: 'height' })
  public _height: number;

  constructor(params?: AttachmentParams) {
    if(params) {
      this._name = params.getName();
      this._userId = params.getUser();
      this._mime = params.getMime();
      this._size = params.getSize();
      this._width = params.getWidth();
      this._height = params.getHeight();
    }
  }

  public getId(): string {
    return this._id;
  }
}
