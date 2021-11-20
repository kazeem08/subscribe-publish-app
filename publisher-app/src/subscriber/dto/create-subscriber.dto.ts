import { IsDefined, IsString } from 'class-validator';

export class CreateSusbcriberDto {
  @IsDefined()
  @IsString()
  url: string;
}
