import { Injectable } from "@nestjs/common";

import UsersContractor from "../contractors/users.contractor";
import PrismaOrm, { PostgresClient } from "../../../shared/infra/prisma/prisma.orm";
import * as UsersTypes from "../contractors/users.contractor.type";
import { User } from "../../../../prisma/generated/postgreClient";

@Injectable()
class UsersRepository implements UsersContractor {
    private readonly prismaOrm: PostgresClient;

    constructor() {
        this.prismaOrm = new PrismaOrm().prismaPostgres();
    }

    public async createUser(data: UsersTypes.ICreateUser): Promise<void> {
        await this.prismaOrm.user.create({ data });
    }

    public async findUserById(user_id: string): Promise<User | null> {
        const user = await this.prismaOrm.user.findFirst({
            where: {
                id: user_id,
            }
        });
        return user;
    }

    public async findUserByFilter(filter: UsersTypes.IFindUserByFilter): Promise<User | null> {
        const users = await this.prismaOrm.user.findFirst({
            where: {
                ...filter,
            }
        });
        return users ;
    }
}

export default UsersRepository;
