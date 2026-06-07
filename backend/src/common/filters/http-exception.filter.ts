import { Response } from "express";

export class HttpException extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = "HttpException";
  }
}

export function handleError(err: unknown, res: Response) {
  if (err instanceof HttpException) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return;
  }

  if (err instanceof Error) {
    res.status(500).json({
      success: false,
      message: err.message || "Internal server error",
    });
    return;
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}
