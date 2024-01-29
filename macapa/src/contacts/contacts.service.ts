import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
  create(createContactDto: CreateContactDto[]) {
    console.log(createContactDto);
    return 'This action adds a new contact';
  }
}
