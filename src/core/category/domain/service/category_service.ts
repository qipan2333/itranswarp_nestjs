import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Category } from '../model/category';

@Injectable()
export class CategoryService {
    
    constructor(private dataSource :DataSource) {

    }
    
    public async createCategory(): Promise<Category> {
        
        //todo
        return null;
    }

}