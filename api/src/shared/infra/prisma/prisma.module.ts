import { Module } from "@nestjs/common";
import { PrismaServicePostgres } from "./prisma.service.postgres";

@Module({
    providers: [PrismaServicePostgres],
})
export class PrismaModule {}
