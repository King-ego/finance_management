import { Injectable } from "@nestjs/common";
import UsersRepository from "../repositories/users.repository";
import { randomUUID } from "crypto";

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
        const id = randomUUID();
        await this.usersRepository.createUser({
            name, email, created_by: id, id
        })
        console.log("old");
    }
}
