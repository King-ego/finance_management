import { Injectable } from "@nestjs/common";

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
}

export default AccountsRepository;
