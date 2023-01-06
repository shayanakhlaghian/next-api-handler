import { BaseError } from './base-error';

export class RequestValidationError extends BaseError {
  statusCode = 400;

  constructor(private errors: { message: string }[]) {
    super();

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return { errors: this.errors };
  }
}
