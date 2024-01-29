import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller()
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @UsePipes(new ValidationPipe())
  @EventPattern('create_contacts')
  async create(createContactDto: CreateContactDto[]) {
    return this.contactsService.create(createContactDto);
  }
}
