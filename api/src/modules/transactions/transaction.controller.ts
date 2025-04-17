import { Body, Controller, Post } from "@nestjs/common";
import CreateTransactionsInput from "./dto/create-transactions-input";

@Controller("transactions")
export class TransactionController {
    constructor() {}

    @Post("")
    createTransaction(@Body() data: CreateTransactionsInput) {
        console.log(data);
    }
}
