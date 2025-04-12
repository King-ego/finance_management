import { Injectable } from "@nestjs/common";
import UsersRepository from "../repositories/users.repository";

interface ICreateUser {
    name: string;
    email: string;
    account_balance: number;
}

@Injectable()
export class CreateUsersService {
    constructor(private readonly usersRepository: UsersRepository) {
    }

    public async execute(data: ICreateUser): Promise<void> {
        const { name, account_balance, email } = data;
        await this.usersRepository.createUser({
            name, email
        })
        console.log("old");
    }
}
