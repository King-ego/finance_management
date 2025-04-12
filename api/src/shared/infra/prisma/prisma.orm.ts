import { PrismaClient as PostgresClient } from '../../../../prisma/generated/postgreClient';

class PrismaOrm {
    private readonly postgresClient: PostgresClient
    constructor() {
        this.postgresClient = new PostgresClient();
    }

    public prismaPostgres(): PostgresClient {
        return this.postgresClient;
    }
}

export { PostgresClient }

export default PrismaOrm;