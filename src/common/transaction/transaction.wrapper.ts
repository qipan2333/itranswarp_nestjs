import { Inject, Injectable } from '@nestjs/common';
import { DataSource, QueryRunner } from "typeorm";
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class TransactionWrapper {
    constructor(private dataSource :DataSource,
                @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {

    }

    public async wrapper(data:any, returnOnErr: any, callback: (queryRunner: QueryRunner, data:any) => any): Promise<any> {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try { 
            const returnData =  await callback(queryRunner, data);
            await queryRunner.commitTransaction();
            return returnData;
        } catch(err) {
            await queryRunner.rollbackTransaction();
            this.logger.error(err.stack);
            return returnOnErr;
        } finally {
            await queryRunner.release();
        }
    }
}