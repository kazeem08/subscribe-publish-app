import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type PublishDocument = Publish & Document;

@Schema({ timestamps: true })
export class Publish {
  @Prop()
  topic: string;

  @Prop({ type: MongooseSchema.Types.String })
  data: { [key: string]: any };
}

export const PublishSchema = SchemaFactory.createForClass(Publish);
