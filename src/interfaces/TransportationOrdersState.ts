import { Dot, LatLngTuple } from '@interfaces/Dot';
import { Status } from '@interfaces/Status';

type IPolyline = LatLngTuple[][];
type LatLngBound = [LatLngTuple, LatLngTuple];

interface Order {
  coords: {
    from: Dot;
    to: Dot;
  };
  polylineStatus: Status;
  polylineError: string;
  polyline: IPolyline;
  latLngBound: LatLngBound | null;
}

interface TransportationOrdersState {
  ids: Array<string>;
  byIds: {
    [id: string]: Order;
  };
}

type TransportationOrderId = TransportationOrdersState['ids'][number];

interface OrderId {
  trOrderId: TransportationOrderId;
}

export type {
  TransportationOrdersState,
  TransportationOrderId,
  Order,
  OrderId,
  IPolyline,
  LatLngBound,
};
