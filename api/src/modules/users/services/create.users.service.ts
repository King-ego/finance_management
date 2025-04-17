import { Injectable } from "@nestjs/common";
import UsersRepository from "../repositories/users.repository";
import { randomUUID } from "crypto";
import AccountsRepository from "../../accounts/repositories/accounts.repository";
import { CustomerException } from "../../../shared/errors/customerExceptions";

interface ICreateUser {
    name: string;
    email: string;
}

@Injectable()
export class CreateUsersService {
    constructor(
        private readonly usersRepository: UsersRepository,
        private readonly accountsRepository: AccountsRepository,
    ) {}

    public async execute(data: ICreateUser): Promise<void> {
        const { name, email } = data;
        const existingUser = await this.usersRepository.findUserByFilter({
            email,
        });

        if (existingUser) {
            throw new CustomerException("User already exists", 404);
        }

        const id = randomUUID();
        await this.usersRepository.createUser({
            name,
            email,
            created_by: id,
            id,
        });
        await this.accountsRepository.createAccount({
            value: 0,
            created_by: id,
            user_id: id,
        });
        console.log("old");
    }
}
