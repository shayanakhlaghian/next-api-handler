import { BaseError } from './base-error';

export class NotFoundError extends BaseError {
  statusCode = 404;

  constructor(private requested: string) {
    super();

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return { errors: [{ message: `${this.requested} was not found.` }] };
  }
}
