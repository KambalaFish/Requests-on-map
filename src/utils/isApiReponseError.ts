import { ApiResponse } from '@interfaces/ApiResponse';
import { ErrorBody } from '@interfaces/ErrorBody';

export const isAPIResponseError = (error: any): error is ApiResponse<ErrorBody> => {
  return Object.hasOwn(error, 'response');
};
