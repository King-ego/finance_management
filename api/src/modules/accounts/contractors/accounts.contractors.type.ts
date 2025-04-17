export interface ICreateAccount {
    value: number;
    user_id: string;
    created_by: string;
}

export interface IFindAccountFilter {
    user_id?: string;
}
