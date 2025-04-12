import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../../prisma/generated/postgreClient';

@Injectable()
export class PrismaServicePostgres extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    console.log("Postgres connected");
  }

}
