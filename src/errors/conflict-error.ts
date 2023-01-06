import { BaseError } from './base-error';

export class ConflictError extends BaseError {
  statusCode = 409;

  constructor(private error: string) {
    super();

    Object.setPrototypeOf(this, ConflictError.prototype);
  }

  serializeErrors() {
    return { errors: [{ message: this.error }] };
  }
}
