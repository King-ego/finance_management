import { Module } from "@nestjs/common";
import { CreateTransactionsService } from "./services/create.transactions.service";
import { TransactionsRepositoryModule } from "./repositories/transactions.repository.module";
import { AccountsRepositoryModule } from "../accounts/repositories/accounts.repository.module";
import { UsersRepositoryModule } from "../users/repositories/users.repository.module";

@Module({
    providers: [CreateTransactionsService],
    imports: [
        TransactionsRepositoryModule,
        AccountsRepositoryModule,
        UsersRepositoryModule,
    ],
    exports: [CreateTransactionsService],
})
export class TransactionsServicesModule {}
