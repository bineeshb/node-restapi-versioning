import { Request, Response, NextFunction } from 'express';

export default function (err: any, req: Request, res: Response, next: NextFunction) {
  let error = { ...err, message: err.message };

  res.status(error.statusCode || 500).json({
    error: error.message || 'Server Error'
  });
}
