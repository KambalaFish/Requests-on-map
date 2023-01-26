import type { Dot } from '@interfaces/Dot';
import { ApiResponse } from '@interfaces/ApiResponse';
import { ErrorBody } from '@interfaces/ErrorBody';
import { OSRMResponse } from '@interfaces/OSRMResponse';

export interface IRouteAPI {
  getPolylinePath(from: Dot, to: Dot): Promise<ApiResponse<OSRMResponse | ErrorBody>>;
}
