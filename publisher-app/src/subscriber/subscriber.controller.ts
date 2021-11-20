import {
  Controller,
  Post,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { plainToClass } from 'class-transformer';
import { CreateSusbcriberDto } from './dto/create-subscriber.dto';
import { SubscribeDTO } from './dto/subscriber.dto';

@Controller('subscribe')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) {}

  @Post('/:topic')
  subscribe(
    @Param('topic') topic: string,
    @Body() createSusbcribeDto: CreateSusbcriberDto,
  ) {
    // validate request body
    if (!createSusbcribeDto.url) {
      throw new BadRequestException('url is required');
    }
    return plainToClass(
      SubscribeDTO,
      this.subscriberService.create(createSusbcribeDto, topic),
    );
  }
}
