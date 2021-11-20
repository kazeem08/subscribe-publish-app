import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SusbcribeController } from './subscriber.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Subscriber, SubscriberSchema } from './schema/subscriber.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Subscriber.name, schema: SubscriberSchema },
    ]),
  ],
  controllers: [SusbcribeController],
  providers: [SubscriberService],
  exports: [SubscriberService],
})
export class SusbcriberModule {}
