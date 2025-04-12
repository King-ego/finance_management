import UsersContractor from "../contractors/users.contractor";
import PrismaOrm, {PostgresClient} from "../../../shared/infra/prisma/prisma.orm";
import * as UsersTypes from "../contractors/users.contractor.type";

class UsersRepository implements UsersContractor {
    private readonly ormPrisma: PostgresClient;
    constructor() {
        this.ormPrisma =  new PrismaOrm().prismaPostgres();
    }
    public async createUser(data: UsersTypes.ICreateUser): Promise<void> {
        await this.ormPrisma.user.create({data})
    }
}

export default UsersRepository;
