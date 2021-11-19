import { Controller, Post, Body, Param } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';

@Controller()
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @Post(':test1')
  processBroadcastForTopic1(
    @Param('test1') resource: string,
    @Body() createSubscriberDto: CreateSubscriberDto,
  ) {
    return this.subscriberService.displayBroadcast(
      createSubscriberDto,
      resource,
    );
  }

  @Post(':test2')
  processBroadcastForTopic2(
    @Param('test2') resource: string,
    @Body() createSubscriberDto: CreateSubscriberDto,
  ) {
    return this.subscriberService.displayBroadcast(
      createSubscriberDto,
      resource,
    );
  }
}
