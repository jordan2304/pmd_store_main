import { Controller, Get, Post ,Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // };

  @Get()
  getClient(@Body()body: []): string {
    return this.appService.getClient(body);
  };

  // @Post()
  // postPmd(): string {
  //   return this.appService.postPmd();
  // }


  @Post()
  postClient(@Body()body: []): string {
    return this.appService.postClient(body);
  }
}
