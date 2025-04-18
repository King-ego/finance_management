import { IsEmail, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export default class CreateUsersInput {
    @ApiProperty({ example: "João da Silva", type: String })
    @IsString()
    name: string;

    @ApiProperty({ example: "joao@gmail.com", type: String })
    @IsString()
    @IsEmail()
    email: string;
}
