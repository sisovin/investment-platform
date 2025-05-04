import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message || null,
      name: exception.name,
    };

    if (status === HttpStatus.BAD_REQUEST) {
      errorResponse.message = 'Invalid request data';
    } else if (status === HttpStatus.NOT_FOUND) {
      errorResponse.message = 'Resource not found';
    } else if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
      errorResponse.message = 'Internal server error';
    }

    response.status(status).json(errorResponse);
  }
}
