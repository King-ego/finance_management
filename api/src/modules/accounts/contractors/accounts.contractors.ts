import * as AccountsType from "./accounts.contractors.type";
import { Account } from "../../../../prisma/generated/postgreClient";

export default interface AccountsContractors {
    createAccount(accountData: AccountsType.ICreateAccount): Promise<any>;

    findAccountFilter(
        filter: AccountsType.IFindAccountFilter,
    ): Promise<Account | null>;

    saveAccount(_: Account): Promise<void>;
}
