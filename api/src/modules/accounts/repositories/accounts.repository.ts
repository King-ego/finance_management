import { Injectable } from "@nestjs/common";
import { Account } from "../../../../prisma/generated/postgreClient";

import AccountsContractors from "../contractors/accounts.contractors";
import * as AccountsType from "../contractors/accounts.contractors.type";
import PrismaOrm, {
    PostgresClient,
} from "../../../shared/infra/prisma/prisma.orm";

@Injectable()
class AccountsRepository implements AccountsContractors {
    private readonly prismaOrm: PostgresClient;

    constructor() {
        this.prismaOrm = new PrismaOrm().prismaPostgres();
    }

    public async createAccount(
        accountData: AccountsType.ICreateAccount,
    ): Promise<any> {
        await this.prismaOrm.account.create({
            data: accountData,
        });
    }

    public async findAccountFilter(
        filter: AccountsType.IFindAccountFilter,
    ): Promise<Account | null> {
        const account = await this.prismaOrm.account.findFirst({
            where: {
                ...filter,
            },
        });
        return account;
    }

    public async saveAccount(account: Account): Promise<void> {
        await this.prismaOrm.account.update({
            where: {
                id: account.id,
            },
            data: account,
        });
    }
}

export default AccountsRepository;
