import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Contact {
  @Field()
  name: string;

  @Field()
  cellphone: string;
}
