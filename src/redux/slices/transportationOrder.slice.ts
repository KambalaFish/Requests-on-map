import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { trOrdersInitialState as initialState } from '@redux/initialStates/trOrdersInitialState';
import { Status } from '@interfaces/Status';
import type {
  LatLngBound,
  TransportationOrderId,
} from '@interfaces/TransportationOrdersState';
import type { LatLngTuple } from '@interfaces/Dot';

const transportationOrderSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    pendingPathLoad(state, { payload }: PayloadAction<TransportationOrderId>) {
      state.byIds[payload].polylineStatus = Status.loading;
    },
    fulfilledPathLoad(
      state,
      {
        payload: { id, polyline },
      }: PayloadAction<{
        id: TransportationOrderId;
        polyline: LatLngTuple[][];
      }>
    ) {
      state.byIds[id].polylineStatus = Status.succeeded;
      state.byIds[id].polyline = polyline;
      state.byIds[id].polylineError = '';
    },
    rejectedPathLoad(
      state,
      {
        payload: { id, error },
      }: PayloadAction<{ id: TransportationOrderId; error: string }>
    ) {
      state.byIds[id].polylineStatus = Status.failed;
      state.byIds[id].polylineError = error;
    },
    setLatLngBound(
      state,
      {
        payload: { id, latLngBound },
      }: PayloadAction<{
        id: TransportationOrderId;
        latLngBound: LatLngBound | null;
      }>
    ) {
      state.byIds[id].latLngBound = latLngBound;
    },
  },
});
export const { reducer: trOrderReducer } = transportationOrderSlice;

export { transportationOrderSlice };
