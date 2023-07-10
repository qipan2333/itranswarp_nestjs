import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryAppService {
  getA(): string {
    return 'lalala';
  }
}
