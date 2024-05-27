import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello PMD!';
  // }
  // postPmd(): string {
  //   return 'Post PMD!';
  // }
  getClient(body): string {
    return `${body.name}`;
  }
  postClient(body): string {
    return `${body.name}`;
  }


}
