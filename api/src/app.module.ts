import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './shared/infra/prisma/prisma.module';
import { AccountsModule } from './modules/accounts/accounts.module';

@Module({
  imports: [UsersModule, PrismaModule, AccountsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
