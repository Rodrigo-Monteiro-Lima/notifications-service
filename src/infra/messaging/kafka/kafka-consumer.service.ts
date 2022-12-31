import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['becoming-porpoise-14532-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'YmVjb21pbmctcG9ycG9pc2UtMTQ1MzIkRatSzkaQ0537Hj3HBVc-lgWQfscgdRs',
          password: '38e8f6b609d143ed859f9cc5d3a9d8b0',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
