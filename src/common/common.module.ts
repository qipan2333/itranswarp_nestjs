import { Module } from '@nestjs/common';
import { TransactionWrapper } from './transaction/transaction.wrapper';
import { MyUtil } from './my_util';

@Module({
  imports: [],
  controllers: [],
  providers: [TransactionWrapper, MyUtil],
})
export class CommonModule {}
