import { Module } from '@nestjs/common';
import UsersRepository from "./users.repository";
import PrismaOrm from "../../../shared/infra/prisma/prisma.orm";

@Module({
    providers: [UsersRepository],
    exports: [UsersRepository],
})
export class UsersRepositoryModule {}