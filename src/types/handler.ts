import { NextApiRequest, NextApiResponse } from 'next';
import { Method } from './methods';

export interface Handler {
  method: Method;
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}
