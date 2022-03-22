import { createAsyncAction } from 'typesafe-actions';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest, fork } from '@redux-saga/core/effects';

import { service } from '@src/apis';

import { Post, AddPostRequest } from '@src/interface/posts';
import { APIError } from '@src/interface/error';

export const POSTS = 'posts';

export const GET_POSTS = `${POSTS}/GET_POSTS`;
export const GET_POSTS_SUCCESS = `${POSTS}/GET_POSTS_SUCCESS`;
export const GET_POSTS_FAILURE = `${POSTS}/GET_POSTS_FAILURE`;

export const getPosts = createAsyncAction(
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
)<{}, { posts: Post[] }, APIError>();

function* getPostsSaga() {
  try {
    const { data }: AxiosResponse<Post[]> = yield call(service.getPostList);
    yield put(
      getPosts.success({
        posts: data,
      }),
    );
  } catch ({ response }) {
    const { data, status } = response as AxiosResponse;
    yield put(getPosts.failure({ data, status }));
  }
}

export const GET_SELECTED_POST = `${POSTS}/GET_SELECTED_POST`;
export const GET_SELECTED_POST_SUCCESS = `${POSTS}/GET_SELECTED_SUCCESS`;
export const GET_SELECTED_POST_FAILURE = `${POSTS}/GET_SELECTED_FAILURE`;

export const getSelectedPost = createAsyncAction(
  GET_SELECTED_POST,
  GET_SELECTED_POST_SUCCESS,
  GET_SELECTED_POST_FAILURE,
)<{ id: number }, { post: Post }, APIError>();

function* getSelectedPostSaga(
  action: ReturnType<typeof getSelectedPost.request>,
) {
  const { id } = action.payload;
  try {
    const { data }: AxiosResponse<Post> = yield call(
      service.getPostDetailInformation,
      id,
    );
    yield put(
      getSelectedPost.success({
        post: data,
      }),
    );
  } catch ({ response }) {
    const { data, status } = response as AxiosResponse;
    yield put(getSelectedPost.failure({ data, status }));
  }
}

export const ADD_POST = `${POSTS}/ADD_POSTS`;
export const ADD_POST_SUCCESS = `${POSTS}/ADD_POSTS_SUCCESS`;
export const ADD_POST_FAILURE = `${POSTS}/ADD_POSTS_FAILURE`;

export const addPosts = createAsyncAction(
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
)<{ addPostRequest: AddPostRequest; onSuccess: () => void }, void, APIError>();

function* addPostSaga(action: ReturnType<typeof addPosts.request>) {
  const { addPostRequest, onSuccess } = action.payload;
  try {
    const { data }: AxiosResponse<Post> = yield call(
      service.addPost,
      addPostRequest,
    );
    yield put(addPosts.success());
    yield fork(onSuccess);

    const { data: refetchedData }: AxiosResponse<Post[]> = yield call(
      service.getPostList,
    );
    yield put(
      getPosts.success({
        posts: refetchedData,
      }),
    );
  } catch ({ response }) {
    const { data, status } = response as AxiosResponse;
    yield put(getPosts.failure({ data, status }));
  }
}

export const postsAsyncAction = {
  getPosts,
  getSelectedPost,
  addPosts,
};

export default function* postsSaga() {
  yield takeLatest(GET_POSTS, getPostsSaga);
  yield takeLatest(GET_SELECTED_POST, getSelectedPostSaga);
  yield takeLatest(ADD_POST, addPostSaga);
}
