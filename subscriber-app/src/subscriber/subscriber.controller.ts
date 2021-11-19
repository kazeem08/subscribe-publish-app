import { Controller, Post, Body, Param } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';

@Controller()
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  // process broadcast for subscriber test1

  @Post(':test1')
  broadcastHandlerOne(
    @Param('test1') resource: string,
    @Body() createSubscriberDto: CreateSubscriberDto,
  ) {
    return this.subscriberService.processBroadcast(
      createSubscriberDto,
      resource,
    );
  }

  // process broadcast for subscriber test2
  @Post(':test2')
  broadcastHandlerTwo(
    @Param('test2') resource: string,
    @Body() createSubscriberDto: CreateSubscriberDto,
  ) {
    return this.subscriberService.processBroadcast(
      createSubscriberDto,
      resource,
    );
  }
}
