import { BaseError } from './base-error';

export class ForbiddenError extends BaseError {
  statusCode = 403;

  constructor() {
    super();

    Object.setPrototypeOf(this, Object.prototype);
  }

  serializeErrors() {
    return {
      errors: [{ message: "You're not allowed to access this route." }],
    };
  }
}
