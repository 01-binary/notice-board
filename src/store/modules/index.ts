import { combineReducers } from '@reduxjs/toolkit';
import { all } from '@redux-saga/core/effects';

import { postsReducer, POSTS } from '@src/store/modules/posts';
import postsSaga from '@src/store/modules/posts/saga';

export function* rootSaga() {
  yield all([postsSaga()]);
}

const rootReducer = combineReducers({
  [POSTS]: postsReducer,
});

export default rootReducer;
