import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomerNotFoundException } from './customerExceptions';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Erro interno do servidor';

        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const res = exception.getResponse();
            message = typeof res === 'string' ? res : (res as any).message;
        } else if (exception instanceof Error) {
            message = exception.message;
        }

        // Cria a exceção customizada
        const customException = new CustomerNotFoundException(message, status);

        // Garante que o conteúdo do getResponse seja um objeto
        const errorResponse = customException.getResponse();
        const safeResponse =
            typeof errorResponse === 'object'
                ? errorResponse
                : { message: errorResponse };

        response.status(status).json({
            ...safeResponse,
            timestamp: new Date().toISOString(),
            status
        });
    }
}
