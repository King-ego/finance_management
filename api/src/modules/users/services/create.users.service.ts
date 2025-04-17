import { Injectable } from "@nestjs/common";
import UsersRepository from "../repositories/users.repository";
import { randomUUID } from "crypto";
import { AccountsRepositoryModule } from "../../accounts/repositories/accounts.repository.module";
import AccountsRepository from "../../accounts/repositories/accounts.repository";

interface ICreateUser {
    name: string;
    email: string;
    account_balance: number;
}

@Injectable()
export class CreateUsersService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly accountsRepository: AccountsRepository,
    ) {
    }

    public async execute(data: ICreateUser): Promise<void> {
        const { name, account_balance, email } = data;
        const id = randomUUID();
        await this.usersRepository.createUser({
            name, email, created_by: id, id
        })
        await this.accountsRepository.createAccount({
            value: account_balance,
            created_by: id,
            user_id: id,
        });
        console.log("old");
    }
}
