import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from '../../common/common.module';
import { TransactionWrapper } from '../../common/transaction/transaction.wrapper';
import { Attachment } from './domain/model/attachment';
import { AttachmentController } from './application/controller/attachment.controller';
import { AttachmentAppService } from './application/service/Attachment.appservice';
import { AttachmentService } from './domain/service/attachment_service';

@Module({
  imports: [TypeOrmModule.forFeature([Attachment]), CommonModule],
  controllers: [AttachmentController],
  providers: [AttachmentAppService, AttachmentService, TransactionWrapper],
})
export class AttachmentModule {}
