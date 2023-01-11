import { BaseError } from './base-error';

export class AuthorizationError extends BaseError {
  statusCode = 401;

  constructor() {
    super();

    Object.setPrototypeOf(this, AuthorizationError.prototype);
  }

  serializeErrors() {
    return { errors: [{ message: "you're not authorized." }] };
  }
}
