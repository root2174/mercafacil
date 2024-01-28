import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsResolver } from './contacts.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [ContactsResolver, ContactsService],
  imports: [
    ClientsModule.register([
      {
        name: 'CONTACTS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://admin:admin@localhost:5672'],
          queue: 'contacts_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
})
export class ContactsModule {}
