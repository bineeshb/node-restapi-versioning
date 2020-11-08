import { NextFunction, Request, Response } from 'express';
import { ErrorResponse } from '../utils';

export function invalidRoute(req: Request, res: Response, next: NextFunction) {
  return next(new ErrorResponse('Not Found. Available Endpoints: /api/v1/parse and /api/v2/parse. Method: POST', 404));
}
