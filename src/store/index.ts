import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer, { rootSaga } from '@src/store/modules';

const sagaMiddleware = createSagaMiddleware();

const initStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware, createLogger()],
    devTools: true,
  });

  sagaMiddleware.run(rootSaga);
  return { store };
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const { store } = initStore();
export { store };
