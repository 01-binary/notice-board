import { createAsyncAction } from 'typesafe-actions';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from '@redux-saga/core/effects';

import { service } from '@src/apis';

import { Post } from '@src/interface/posts';
import { APIError } from '@src/interface/error';

export const POSTS = 'posts';

export const GET_POSTS = `${POSTS}/GET_POSTS`;
export const GET_POSTS_SUCCESS = `${POSTS}/GET_POSTS_SUCCESS`;
export const GET_POSTS_FAILURE = `${POSTS}/GET_POSTS_FAILURE`;

export const getPosts = createAsyncAction(
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
)<{}, { posts: Post[] }, APIError>();

function* getPostsSaga() {
  try {
    const { data }: AxiosResponse<Post[]> = yield call(
      service.getPostList
    );
    yield put(
      getPosts.success({
        posts: data,
      })
    );
  } catch ({ response }) {
    const { data, status } = response as AxiosResponse;
    yield put(getPosts.failure({ data, status }));
  }
}

export const postsAsyncAction = {
  getPosts,
};

export default function* postsSaga() {
  yield takeLatest(GET_POSTS, getPostsSaga);
}
