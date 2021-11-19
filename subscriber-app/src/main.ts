import { NestFactory } from '@nestjs/core';
import { SubscriberModule } from './subscriber/subscriber.module';

async function bootstrap() {
  const app = await NestFactory.create(SubscriberModule);
  await app.listen(9000);
}
bootstrap();
