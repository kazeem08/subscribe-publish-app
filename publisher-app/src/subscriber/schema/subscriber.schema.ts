import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type SubscriberDocument = Subscriber & Document;

@Schema({ timestamps: true })
export class Subscriber {
  @Prop()
  topic: string;

  @Prop({ type: MongooseSchema.Types.String })
  url: string;
}

export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);
