import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateContactInput {
  @Field()
  name: string;

  @Field()
  cellphone: string;
}
