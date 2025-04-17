export interface ICreateUser {
    name: string;
    email: string;
    created_by: string;
    id: string;
}

export interface IFindUserByFilter {
    name?: string;
    email?: string;
    created_by?: string;
    id?: string;
}
