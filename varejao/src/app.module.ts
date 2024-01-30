import { Module } from '@nestjs/common';
import { ContactsService } from './contacts/contacts.service';
import { PrismaService } from './database/PrismaService';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [ContactsModule],
  controllers: [],
  providers: [ContactsService, PrismaService],
})
export class AppModule {}
