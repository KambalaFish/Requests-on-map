import { PayloadAction } from '@reduxjs/toolkit';
import { Order, OrderId } from '@interfaces/TransportationOrdersState';
import { transportationOrderSlice } from '@redux/slices/transportationOrder.slice';

export interface LoadPolylinePayload extends OrderId, Pick<Order, 'coords'> {}
export const LOAD_PATH = 'LOAD_PATH';
const loadPolylinePathAction = (
  payload: LoadPolylinePayload
): PayloadAction<LoadPolylinePayload> => ({
  type: LOAD_PATH,
  payload,
});
export { loadPolylinePathAction };
export const { pendingPathLoad, fulfilledPathLoad, rejectedPathLoad, setLatLngBound } =
  transportationOrderSlice.actions;
