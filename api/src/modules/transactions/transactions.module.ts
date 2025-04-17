import { Module } from "@nestjs/common";
import { TransactionController } from "./transaction.controller";
import { TransactionsServicesModule } from "./transactions.services.module";

@Module({
    imports: [TransactionsServicesModule],
    controllers: [TransactionController],
    providers: [],
})
export class TransactionsModule {}
