import { Module } from '@nestjs/common';
import { AccountsRepositoryModule } from './repositories/accounts.repository.module';

@Module({
  imports: [AccountsRepositoryModule]
})
export class AccountsModule {}
