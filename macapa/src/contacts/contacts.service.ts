import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { PrismaService } from '../database/PrismaService';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto[]) {
    return this.prisma.contacts.createMany({
      data: this.transform(createContactDto),
      skipDuplicates: true,
    });
  }

  private transform(createContactDto: CreateContactDto[]) {
    return createContactDto.map((contact) => ({
      ...contact,
      name: contact.name.toUpperCase(),
      cellphone: this.formatCellphone(contact.cellphone),
    }));
  }

  private formatCellphone(cellphone: string) {
    const countryCode = cellphone.slice(0, 2);
    const ddd = cellphone.slice(2, 4);
    const part1 = cellphone.slice(4, 9);
    const part2 = cellphone.slice(9, 14);

    return `+${countryCode} (${ddd}) ${part1}-${part2}`;
  }
}
