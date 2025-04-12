import UsersContractor from "../contractors/users.contractor";
import PrismaOrm, {PostgresClient} from "../../../shared/infra/prisma/prisma.orm";

class UsersRepository implements UsersContractor {
    private readonly ormPrisma: PostgresClient;
    constructor() {
        this.ormPrisma =  new PrismaOrm().prismaPostgres();
    }
    public async createUser(): Promise<void> {
    }
}

export default UsersRepository;