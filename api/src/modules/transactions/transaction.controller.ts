import { Body, Controller, Post } from "@nestjs/common";
import CreateTransactionsInput from "./dto/create-transactions-input";
import { CreateTransactionsService } from "./services/create.transactions.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Transações")
@Controller("transactions")
export class TransactionController {
    constructor(
        private readonly createTransactionsService: CreateTransactionsService,
    ) {}

    @Post("")
    public async createTransaction(@Body() data: CreateTransactionsInput) {
        await this.createTransactionsService.execute(data);
        console.log(data);
    }
}
