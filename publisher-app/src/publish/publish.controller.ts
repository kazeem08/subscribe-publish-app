import { Controller, Post, Body, Param, HttpStatus, Res } from '@nestjs/common';
import { PublishService } from './publish.service';

@Controller('publish')
export class PublishController {
  constructor(private readonly publishService: PublishService) {}

  @Post('/:topic')
  async publish(
    @Res() res: any,
    @Param('topic') topic: string,
    @Body() payload: { [key: string]: any },
  ) {
    // publish data
    await this.publishService.publish(topic, payload);

    return res.status(HttpStatus.OK).json({ topic, data: payload });
  }
}
