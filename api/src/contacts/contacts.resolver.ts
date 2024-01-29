import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ContactsService } from './contacts.service';
import { Contact } from './entities/contact.entity';
import { CreateContactInput } from './dto/create-contact.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Resolver(() => Contact)
export class ContactsResolver {
  constructor(private readonly contactsService: ContactsService) {}

  @Mutation(() => [Contact])
  @UseGuards(JwtAuthGuard)
  createContact(
    @Args('createContactInput', { type: () => [CreateContactInput] })
    createContactInput: CreateContactInput[],
  ) {
    return this.contactsService.create(createContactInput);
  }
}
