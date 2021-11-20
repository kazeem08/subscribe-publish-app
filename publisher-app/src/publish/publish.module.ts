import { Module } from '@nestjs/common';
import { PublishService } from './publish.service';
import { PublishController } from './publish.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SusbcriberModule } from 'src/subscriber/subscriber.module';
import { Publish, PublishSchema } from './entities/publish.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Publish.name, schema: PublishSchema }]),
    SusbcriberModule,
  ],
  controllers: [PublishController],
  providers: [PublishService],
})
export class PublishModule {}
