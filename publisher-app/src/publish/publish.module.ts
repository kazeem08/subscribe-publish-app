import { Module } from '@nestjs/common';
import { PublishService } from './publish.service';
import { PublishController } from './publish.controller';
import { SusbcriberModule } from 'src/subscriber/subscriber.module';

@Module({
  imports: [SusbcriberModule],
  controllers: [PublishController],
  providers: [PublishService],
})
export class PublishModule {}
