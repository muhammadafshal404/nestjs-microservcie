import { Controller, Get, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
const logger = new Logger('AppController');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  get() {
    return 'get';
  }

  @MessagePattern('sum')
  async sumNumbers(data: Array<number>) {
    logger.log(
      'math microservice recieved a request to sum ' + data.toString(),
    );
    return { result: data.reduce((a, b) => a + b) };
  }

  @EventPattern('event_sum')
  async sumNumber(data: Array<number>) {
    logger.log(
      'math microservice recieved a request to sum ' + data.toString(),
    );
    return { result: data.reduce((a, b) => a + b) };
  }
}
