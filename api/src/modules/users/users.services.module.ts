import { Module } from '@nestjs/common';
import { CreateUsersService } from "./services/create.users.service";
import { UsersRepositoryModule } from "./repositories/users.repository.module";

@Module({
    providers: [CreateUsersService],
    imports: [UsersRepositoryModule],
    exports: [CreateUsersService],
})
export class UsersServicesModule {}
