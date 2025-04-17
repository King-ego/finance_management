import * as AccountsType from './accounts.contractors.type';

export default interface AccountsContractors {
    createAccount: (accountData: AccountsType.ICreateAccount) => Promise<any>;
}