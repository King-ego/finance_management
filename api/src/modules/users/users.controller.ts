import {Body, Controller, Get, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";

import CreateUsersInput from "./dto/create-users-input";
import { CreateUsersService } from "./services/create.users.service";

@ApiTags("Usuarios")
@Controller('users')
export class UsersController {
    constructor(
        private readonly createUsersService: CreateUsersService,
    ) {
    }
    @Post("")
    async create(@Body() body: CreateUsersInput) {
        await this.createUsersService.execute(body);
        return "Usuario criado com sucesso";
    }

    @Get("")
    findAll() {
        return "ola";
    }
}
