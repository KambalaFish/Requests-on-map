import { AxiosResponse } from 'axios';
import { ApiResponse } from '@interfaces/ApiResponse';
export const confirmationHandler = <T>(result: AxiosResponse<T>): ApiResponse<T> => {
  return {
    code: result.status,
    response: result.data,
  };
};
