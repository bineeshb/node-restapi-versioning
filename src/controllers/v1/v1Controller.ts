import { Request, Response, NextFunction } from 'express';
import { parseWithDelimiter, ErrorResponse } from '../../utils';

export function v1Controller (req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.body.data) {
      throw new ErrorResponse("Request should contain 'data'", 400);
    }

    const { data } = req.body;
    const response = parseWithDelimiter(data);

    if (!response) {
      throw new ErrorResponse("Invalid request data", 400);
    }

    res.status(200).json({
      statusCode: 200,
      data: response
    });
  } catch(error) {
    return next(error);
  }
};
