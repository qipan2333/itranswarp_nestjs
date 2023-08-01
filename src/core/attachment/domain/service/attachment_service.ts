import { Injectable } from '@nestjs/common';
import { QueryRunner, Repository } from 'typeorm';
import { TransactionWrapper } from 'src/common/transaction/transaction.wrapper';
import { InjectRepository } from '@nestjs/typeorm';
import { Attachment } from '../model/attachment';
import { AttachmentParams } from '../params/attachment_params';

@Injectable()
export class AttachmentService {
    
    constructor(
        private transactionWrapper: TransactionWrapper,
        @InjectRepository(Attachment)
        private AttachmentRepository: Repository<Attachment>) {

    }
    
    public async createAttachment(params: AttachmentParams): Promise<Attachment> {
        return this.transactionWrapper.wrapper(params, null, async (queryRunner: QueryRunner, params :AttachmentParams) => {
            const attachment = new Attachment(params);
            await queryRunner.manager.save(attachment);
            return attachment;
        });
    }

    public async findAttachmentById(id: string): Promise<Attachment | null> {
        return this.AttachmentRepository.findOneBy({ _id: id });
    }
}