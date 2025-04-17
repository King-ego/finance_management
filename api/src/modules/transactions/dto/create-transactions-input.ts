import { IsNumber, IsString } from "class-validator";

export default class CreateTransactionsInput {
    @IsNumber()
    value: number;

    @IsString()
    sender_account_id: string;

    @IsString()
    receiver_account_id: string;
}
