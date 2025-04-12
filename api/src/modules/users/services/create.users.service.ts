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

    public async execute(_: ICreateUser): Promise<void> {
        console.log("old");
    }
}
