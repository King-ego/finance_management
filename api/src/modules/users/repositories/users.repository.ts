import { Injectable } from "@nestjs/common";

import UsersContractor from "../contractors/users.contractor";
import PrismaOrm, { PostgresClient } from "../../../shared/infra/prisma/prisma.orm";
import * as UsersTypes from "../contractors/users.contractor.type";

@Injectable()
class UsersRepository implements UsersContractor {
    private readonly prismaOrm: PostgresClient;

    constructor() {
        this.prismaOrm = new PrismaOrm().prismaPostgres();
    }

    public async createUser(data: UsersTypes.ICreateUser): Promise<void> {
        await this.prismaOrm.user.create({ data });
    }
}

export default UsersRepository;
