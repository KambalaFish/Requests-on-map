import { configureStore } from '@reduxjs/toolkit';
import { trOrderReducer } from '@redux/slices/transportationOrder.slice';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '@redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    trOrder: trOrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export { store };
export type AppState = ReturnType<typeof store.getState>;
