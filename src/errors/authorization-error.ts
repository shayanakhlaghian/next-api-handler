import { BaseError } from './base-error';

export class AuthorizationError extends BaseError {
  statusCode = 401;

  constructor() {
    super();

    Object.setPrototypeOf(this, Object.prototype);
  }

  serializeErrors() {
    return { errors: [{ message: "You're not authorized." }] };
  }
}
