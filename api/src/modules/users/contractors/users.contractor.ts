import * as UsersTypes from "./users.contractor.type";
import { User } from "../../../../prisma/generated/postgreClient";

export default interface UsersContractor {
    createUser(_: UsersTypes.ICreateUser): Promise<void>;

    findUserById(user_id: string): Promise<User | null>;

    findUserByFilter(
        filter: UsersTypes.IFindUserByFilter,
    ): Promise<User | null>;
}
