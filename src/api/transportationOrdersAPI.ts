import type { Dot } from '@interfaces/Dot';
import { IRouteAPI } from '@interfaces/IRouteAPI';
import axios from 'axios';
import { OSRMResponse } from '@interfaces/OSRMResponse';
import { confirmationHandler } from '@utils/confirmationHandler';
import { errorHandler } from '@utils/errorHandler';

class TransportationOrdersAPI implements IRouteAPI {
  public async getPolylinePath(from: Dot, to: Dot) {
    try {
      const result = await axios.get<OSRMResponse>(
        `http://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&steps=true&geometries=polyline6`
      );
      return confirmationHandler(result);
    } catch (error) {
      throw errorHandler(error);
    }
  }
}

export const transportationOrdersAPI = new TransportationOrdersAPI();
