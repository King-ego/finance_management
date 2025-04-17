import { Injectable } from "@nestjs/common";
import TransactionsRepository from "../repositories/transactions.repository";
import AccountsRepository from "../../accounts/repositories/accounts.repository";
import { CustomerException } from "../../../shared/errors/customerExceptions";

interface ICreateTransaction {
    sender_id: string;
    recipient_id: string;
    value: number;
}

@Injectable()
export class CreateTransactionsService {
    constructor(
        private readonly transactionsRepository: TransactionsRepository,
        private readonly accountsRepository: AccountsRepository,
    ) {}

    public async execute(data: ICreateTransaction): Promise<void> {
        const { sender_id, value, recipient_id } = data;
        const senderAccount = await this.accountsRepository.findAccountFilter({
            user_id: sender_id,
        });

        const recipientAccount =
            await this.accountsRepository.findAccountFilter({
                user_id: recipient_id,
            });

        if (!recipientAccount) {
            throw new CustomerException("Recipient account not found", 404);
        }

        if (!senderAccount) {
            throw new CustomerException("Sender account not found", 404);
        }

        if (senderAccount.value < value) {
            throw new CustomerException("Insufficient funds", 400);
        }

        senderAccount.value -= value;
        recipientAccount.value += value;

        await this.accountsRepository.saveAccount(senderAccount);
        await this.accountsRepository.saveAccount(recipientAccount);

        await this.transactionsRepository.createTransaction({
            created_by: sender_id,
            value,
            receiver_account_id: recipientAccount.id,
            sender_account_id: senderAccount.id,
        });
    }
}
