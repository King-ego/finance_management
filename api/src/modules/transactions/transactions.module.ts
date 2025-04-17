import { Module } from "@nestjs/common";
import { TransactionsRepositoryModule } from "./repositories/transactions.repository.module";

@Module({
    imports: [TransactionsRepositoryModule],
})
export class TransactionsModule {}
