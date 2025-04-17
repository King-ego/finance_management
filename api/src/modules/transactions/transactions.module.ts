import { Module } from "@nestjs/common";
import { TransactionsRepositoryModule } from "./repositories/transactions.repository.module";
import { TransactionController } from "./transaction.controller";

@Module({
    imports: [TransactionsRepositoryModule],
    controllers: [TransactionController],
})
export class TransactionsModule {}
