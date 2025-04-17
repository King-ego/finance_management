import { IsEmail, IsString, IsNumber } from "class-validator";

export default class CreateUsersInput {
    @IsString()
    name: string;

    @IsNumber()
    account_balance: number;

    @IsString()
    @IsEmail()
    email: string;
}
