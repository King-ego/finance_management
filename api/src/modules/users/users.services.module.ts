import { Module } from '@nestjs/common';
import { CreateUsersService } from "./services/create.users.service";
import { UsersRepositoryModule } from "./repositories/users.repository.module";
import { AccountsRepositoryModule } from "../accounts/repositories/accounts.repository.module";

@Module({
    providers: [CreateUsersService],
    imports: [UsersRepositoryModule, AccountsRepositoryModule],
    exports: [CreateUsersService],
})
export class UsersServicesModule {}
