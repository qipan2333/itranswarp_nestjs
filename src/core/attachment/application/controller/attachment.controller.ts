import { Body, Controller, Post } from '@nestjs/common';
import { AttachmentAppService } from '../service/Attachment.appservice';
import { AttachmentForm } from '../form/attachment_form';

@Controller('attachment')
export class AttachmentController {
  constructor(private readonly appService: AttachmentAppService) {
  }

  @Post('createAttachment')
  async createArticle(@Body() form: AttachmentForm): Promise<string>{
    const attachmentForm = new AttachmentForm(form);
    return await this.appService.createAttachment(attachmentForm);
  }
}