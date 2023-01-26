import { takeEvery, put, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  LOAD_PATH,
  fulfilledPathLoad,
  pendingPathLoad,
  rejectedPathLoad,
  setLatLngBound,
} from '@redux/actions/transportationOrders.actions';
import { transportationOrdersAPI } from '@api/transportationOrdersAPI';
import type { LoadPolylinePayload } from '@redux/actions/transportationOrders.actions';
import { calculateLatLngBound } from '@utils/calculateLatLngBound';
import { parseOSRMRouteResponse } from '@utils/parseOSRMRouteResponse';
import { OSRMResponse } from '@interfaces/OSRMResponse';
import { IPolyline } from '@interfaces/TransportationOrdersState';
import { isAPIResponseError } from '@utils/isApiReponseError';

function* loadPolyline({ payload }: PayloadAction<LoadPolylinePayload>) {
  yield put(pendingPathLoad(payload.trOrderId));
  try {
    const osrmPathResponse: Awaited<
      ReturnType<typeof transportationOrdersAPI.getPolylinePath>
    > = yield call(
      transportationOrdersAPI.getPolylinePath,
      payload.coords.from,
      payload.coords.to
    );

    const polyline: IPolyline = yield call(
      parseOSRMRouteResponse,
      osrmPathResponse.response as OSRMResponse
    );

    const latLngBound: ReturnType<typeof calculateLatLngBound> = yield call(
      calculateLatLngBound,
      polyline
    );

    yield put(setLatLngBound({ id: payload.trOrderId, latLngBound }));

    yield put(
      fulfilledPathLoad({
        id: payload.trOrderId,
        polyline,
      })
    );
  } catch (e) {
    if (isAPIResponseError(e)) {
      yield put(
        rejectedPathLoad({
          id: payload.trOrderId,
          error: e.response.error,
        })
      );
    } else if (e instanceof Error) {
      yield put(
        rejectedPathLoad({
          id: payload.trOrderId,
          error: e.message,
        })
      );
    }
  }
}
export function* transportationOrderSaga() {
  yield takeEvery(LOAD_PATH, loadPolyline);
}
