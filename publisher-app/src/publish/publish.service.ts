import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SubscriberService } from 'src/subscriber/subscriber.service';

@Injectable()
export class PublishService {
  constructor(private readonly subscriberService: SubscriberService) {}

  async publish(topic: string, publishPayload: { [key: string]: any }) {
    const subscribers = await this.subscriberService.findAll({ topic });

    const publishArray = [];

    // loop through subscribers and publish
    for (const subscriber of subscribers) {
      const payload = {
        url: subscriber.url,
        topic: subscriber.topic,
        data: publishPayload,
      };
      publishArray.push(this.broadcastMessage(payload));
    }

    if (publishArray.length) {
      await Promise.all(publishArray);
    }

    return {};
  }

  // broadcast to subscribers
  async broadcastMessage(body) {
    const { topic, url, data } = body;

    return axios.post(url, { topic, data });
  }
}
