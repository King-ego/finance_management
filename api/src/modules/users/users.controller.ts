import {Body, Controller, Get, Post} from '@nestjs/common';

import CreateUsersInput from "./dto/create-users-input";
import {ApiTags} from "@nestjs/swagger";

@ApiTags("Usuarios")
@Controller('users')
export class UsersController {
    @Post("")
    create(@Body() body: CreateUsersInput) {
        return "olas";
    }

    @Get("")
    findAll() {
        return "ola";
    }
}
