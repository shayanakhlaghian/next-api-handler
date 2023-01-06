import { AppError } from '../types/app-error';

export abstract class BaseError extends Error {
  abstract statusCode: number;

  constructor() {
    super();

    Object.setPrototypeOf(this, BaseError.prototype);
  }

  abstract serializeErrors(): AppError;
}
