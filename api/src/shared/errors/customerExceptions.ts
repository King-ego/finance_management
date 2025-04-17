import { HttpStatus, HttpException } from "@nestjs/common";

export class CustomerException extends HttpException {
    constructor(message: string, status: HttpStatus = HttpStatus.NOT_FOUND) {
        super({ message }, status);
    }
}
