import { ErrorRequestHandler } from "express";
import { ValidationError } from "yup";

const ErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    let errors: Record<string, string[]> = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });

    return res.status(400).send({
      message: "Validation fails",
      errors,
    });
  }

  console.error(error);

  return res.status(500).send({ message: "Internal server error." });
};

export default ErrorHandler;
