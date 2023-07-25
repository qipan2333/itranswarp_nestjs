import { Module } from '@nestjs/common';
import { TransactionWrapper } from './transaction/transaction.wrapper';
import { MyUtil } from './my_util';
import { HttpResponse } from './http_response';

@Module({
  imports: [],
  controllers: [],
  providers: [TransactionWrapper, MyUtil, HttpResponse],
})
export class CommonModule {}
