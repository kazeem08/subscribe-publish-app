import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSusbcriberDto } from './dto/create-subscriber.dto';
import { Subscriber, SubscriberDocument } from './schema/subscriber.schema';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectModel(Subscriber.name)
    private model: Model<SubscriberDocument>,
  ) {}

  async create(
    createSusbcribeDto: CreateSusbcriberDto,
    topic: string,
  ): Promise<SubscriberDocument> {
    topic = topic.trim(); // trim to remove spaces

    // check if subscriber is alread subscribed to the topic
    const isSubscribed = await this.getActiveSubscriber(
      createSusbcribeDto.url,
      topic,
    );

    if (isSubscribed) {
      throw new HttpException(
        'subscriber is already active',
        HttpStatus.CONFLICT,
      );
    }

    // create subscriber
    return this.model.create({ ...createSusbcribeDto, topic });
  }

  // get active subscriber
  getActiveSubscriber(url: string, topic: string) {
    return this.model.findOne({ url, topic });
  }

  async findAll(filter: { [key: string]: any }): Promise<SubscriberDocument[]> {
    return this.model.find(filter);
  }

  // get active subscriber
  getTopic(topic: string) {
    return this.model.findOne({ topic });
  }
}
