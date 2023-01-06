import { NextApiRequest, NextApiResponse } from 'next';
import { BaseError } from './errors/base-error';
import { AppError } from './types/app-error';
import { Methods } from './types/methods';

export const handleApi =
  (
    method: Methods,
    fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
  ) =>
  (req: NextApiRequest, res: NextApiResponse) => {
    if (method !== req.method) {
      const urlNotFoundError: AppError = {
        errors: [
          {
            message: 'The requested url was not found.',
          },
        ],
      };

      return res.status(404).send(urlNotFoundError);
    }

    fn(req, res).catch((err) => {
      if (err instanceof BaseError)
        return res.status(err.statusCode).send(err.serializeErrors());

      const systemError: AppError = {
        errors: [{ message: 'Something went wrong.' }],
      };

      res.status(500).send(systemError);
    });
  };
