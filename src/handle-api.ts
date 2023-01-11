import { NextApiRequest, NextApiResponse } from 'next';
import { BaseError } from './errors/base-error';
import { AppError } from './types/app-error';
import { Handler } from './types/handler';

const urlNotFoundError: AppError = {
  errors: [
    {
      message: 'requested url was not found on the server.',
    },
  ],
};

const systemError: AppError = {
  errors: [
    {
      message: 'something went wrong.',
    },
  ],
};

export const handleApi =
  (handlers: Handler[]) => (req: NextApiRequest, res: NextApiResponse) => {
    const handler = handlers.find(({ method }) => req.method === method);
    if (!handler) res.status(404).send(urlNotFoundError);

    handler?.fn(req, res).catch((err) => {
      if (err instanceof BaseError)
        res.status(err.statusCode).send(err.serializeErrors());

      res.status(500).send(systemError);
    });
  };
