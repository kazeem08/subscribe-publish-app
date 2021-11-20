import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SubscribeDTO {
  @Expose()
  url: string;

  @Expose()
  topic: string;
}
