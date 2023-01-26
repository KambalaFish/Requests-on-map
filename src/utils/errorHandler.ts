import { isAxiosError } from 'axios';
import { ApiResponse } from '@interfaces/ApiResponse';
import { ErrorBody } from '@interfaces/ErrorBody';

export const INTERNAL_SERVER_ERROR = 500;

export const errorHandler = (error: unknown): ApiResponse<ErrorBody> => {
  if (isAxiosError(error)) {
    return {
      code: error.status ?? INTERNAL_SERVER_ERROR,
      response: {
        error: `${error.name}: ${error.message}`,
      },
    };
  }
  if (error instanceof Error) {
    return {
      code: INTERNAL_SERVER_ERROR,
      response: {
        error: `${error.name}: ${error.message}`,
      },
    };
  }
  return {
    code: INTERNAL_SERVER_ERROR,
    response: {
      error: 'unknown error',
    },
  };
};
