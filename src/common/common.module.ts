import { Module } from '@nestjs/common';
import { TransactionWrapper } from './transaction/transaction.wrapper';

@Module({
  imports: [],
  controllers: [],
  providers: [TransactionWrapper],
})
export class CommonModule {}
