import { ICreateUser } from "./users.contractor.type";

export default interface UsersContractor {
    createUser(_: ICreateUser): Promise<void>;
}
