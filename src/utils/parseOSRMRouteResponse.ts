import { OSRMResponse } from '@interfaces/OSRMResponse';
import polyline from '@mapbox/polyline';
import { IPolyline } from '@interfaces/TransportationOrdersState';

export const parseOSRMRouteResponse = (response: OSRMResponse): IPolyline => {
  return response.routes[0].legs[0].steps.map((s) => polyline.decode(s.geometry, 6));
};
