export class CreateSubscriberDto {
  topic: string;
  publishPayload: { [key: string]: any };
}
