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
            name, email, created_by: "8c56153a-49ee-4932-95b1-fef6648ecd20"
        })
        console.log("old");
    }
}
