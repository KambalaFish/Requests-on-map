import { AppState } from '@redux/store';
import { TransportationOrderId } from '@interfaces/TransportationOrdersState';

const selectAllOrderIds = (state: AppState) => state.trOrder.ids;
const selectOrderCoordsById = (state: AppState, id: TransportationOrderId) =>
  state.trOrder.byIds[id]?.coords;

const selectPolylineStatus = (state: AppState, id: TransportationOrderId) =>
  state.trOrder.byIds[id]?.polylineStatus;

const selectPolyline = (state: AppState, id: TransportationOrderId) =>
  state.trOrder.byIds[id]?.polyline;

const selectLatLngBound = (state: AppState, id: TransportationOrderId) =>
  state.trOrder.byIds[id]?.latLngBound;

const selectPolylineError = (state: AppState, id: TransportationOrderId) =>
  state.trOrder.byIds[id]?.polylineError;

export {
  selectAllOrderIds,
  selectOrderCoordsById,
  selectPolylineStatus,
  selectPolyline,
  selectLatLngBound,
  selectPolylineError,
};
