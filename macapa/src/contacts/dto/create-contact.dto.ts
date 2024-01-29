import { IsNotEmpty, Length } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  name: string;

  @Length(12, 12)
  @IsNotEmpty()
  cellphone: string;
}
