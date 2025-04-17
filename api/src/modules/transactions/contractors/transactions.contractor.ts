import * as TransactionsType from "./transactions.contractor.type";

export default interface TransactionsContractor {
    createTransaction(data: TransactionsType.ICreateTransaction): Promise<void>;
}
