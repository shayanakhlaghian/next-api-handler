import { BaseError } from './base-error';

export class ForbiddenError extends BaseError {
  statusCode = 403;

  constructor() {
    super();

    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeErrors() {
    return {
      errors: [{ message: "you're not allowed to access this route." }],
    };
  }
}
