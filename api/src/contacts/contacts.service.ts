import { Inject, Injectable } from '@nestjs/common';
import { CreateContactInput } from './dto/create-contact.input';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ContactsService {
  constructor(
    @Inject('CONTACTS_SERVICE') private readonly client: ClientProxy,
  ) {}

  create(createContactInput: CreateContactInput[]): CreateContactInput[] {
    this.client.emit('create_contacts', createContactInput);
    return [...createContactInput];
  }
}
