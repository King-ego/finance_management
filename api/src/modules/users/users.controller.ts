import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";

import CreateUsersInput from "./dto/create-users-input";

@ApiTags("Usuarios")
@Controller('users')
export class UsersController {
    @Post("")
    create(@Body() body: CreateUsersInput) {
        return "Usuario criado com sucesso";
    }

    @Get("")
    findAll() {
        return "ola";
    }
}
