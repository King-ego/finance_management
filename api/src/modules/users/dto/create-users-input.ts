import { IsEmail, IsString } from "class-validator";

export default class CreateUsersInput {
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;
}
