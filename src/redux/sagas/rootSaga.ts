import { all, spawn } from 'redux-saga/effects';
import { transportationOrderSaga } from '@redux/sagas/transportationOrder/transportationOrder.saga';

export function* rootSaga() {
  const sagas = [transportationOrderSaga];

  yield all(sagas.map((s) => spawn(s)));
}
