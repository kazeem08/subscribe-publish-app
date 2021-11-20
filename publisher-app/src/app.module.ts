import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PublishModule } from './publish/publish.module';
import { SusbcriberModule } from './subscriber/subscriber.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    SusbcriberModule,
    PublishModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
