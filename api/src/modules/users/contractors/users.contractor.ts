import * as UsersTypes from "./users.contractor.type";

export default interface UsersContractor {
    createUser(_: UsersTypes.ICreateUser): Promise<void>;
}
