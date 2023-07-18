import { Injectable } from "@nestjs/common";
import { DataSource, QueryRunner } from "typeorm";

@Injectable()
export class TransactionWrapper {
    constructor(private dataSource :DataSource) {

    }

    public async wrapper(data:any, returnOnErr: any, callback: (queryRunner: QueryRunner, data:any) => any): Promise<any> {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try { 
            const returnData =  await callback(queryRunner, data);
            queryRunner.commitTransaction();
            return returnData;
        } catch(err) {
            await queryRunner.rollbackTransaction();
            return returnOnErr;
        } finally {
            await queryRunner.release();
        }
    }
}