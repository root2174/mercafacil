import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller()
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @EventPattern('create_contacts')
  async create(createContactDto: CreateContactDto[]) {
    return this.contactsService.create(createContactDto);
  }
}
