import { Injectable } from "@nestjs/common";
import TransactionsRepository from "../repositories/transactions.repository";
import UsersRepository from "../../users/repositories/users.repository";
import AccountsRepository from "../../accounts/repositories/accounts.repository";

interface ICreateTransaction {
    sender_id: string;
    recipient_id: string;
    value: number;
}

@Injectable()
export class CreateTransactionsService {
    constructor(
        private readonly transactionsRepository: TransactionsRepository,
        private readonly usersRepository: UsersRepository,
        private readonly accountsRepository: AccountsRepository,
    ) {}

    public async execute(_: ICreateTransaction): Promise<void> {}
}
