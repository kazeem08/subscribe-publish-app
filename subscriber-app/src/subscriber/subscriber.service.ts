import { Injectable, Logger } from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';

@Injectable()
export class SubscriberService {
  private readonly logger = new Logger(SubscriberService.name);

  displayBroadcast(payload: CreateSubscriberDto, resource: string) {
    this.logger.log(
      `Broadcast received for ${resource}: ${JSON.stringify(payload)}`,
    );

    return payload;
  }
}
