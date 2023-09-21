import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { AttachmentService } from '../../domain/service/attachment_service';
import { AttachmentForm } from '../form/attachment_form';

@Injectable()
export class AttachmentAppService {
  constructor(
    private readonly attachmentService: AttachmentService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  public async createAttachment(form: AttachmentForm): Promise<string> {
    this.logger.info('start create attachment');
    const attachment = await this.attachmentService
      .createAttachment(form)
      .then();
    if (attachment !== null) {
      this.logger.info(
        'start create attachment succeed, id = ' + attachment.getId(),
      );
      return attachment.getId();
    }
    this.logger.error('start create attachment failed');
    return '';
  }
}
