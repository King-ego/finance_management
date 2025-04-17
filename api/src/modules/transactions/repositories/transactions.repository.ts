import { Injectable } from "@nestjs/common";
import TransactionsContractor from "../contractors/transactions.contractor";
import * as TransactionsType from "../contractors/transactions.contractor.type";
import PrismaOrm, {
    PostgresClient,
} from "../../../shared/infra/prisma/prisma.orm";

@Injectable()
class TransactionsRepository implements TransactionsContractor {
    private readonly prismaOrm: PostgresClient;

    constructor() {
        this.prismaOrm = new PrismaOrm().prismaPostgres();
    }

    public async createTransaction(
        data: TransactionsType.ICreateTransaction,
    ): Promise<void> {
        await this.prismaOrm.transaction.create({ data });
    }
}

export default TransactionsRepository;
