import { IsNumber, IsString, IsUUID } from "class-validator";

export default class CreateTransactionsInput {
    @IsNumber()
    value: number;

    @IsUUID()
    @IsString()
    sender_id: string;

    @IsUUID()
    @IsString()
    recipient_id: string;
}
