import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

import { postsAsyncAction } from './saga';

import type { RootState } from '@src/store';
import type { PostReduxState, Post } from '@src/interface/posts';
import type { APIError } from '@src/interface/error';

export const POSTS = 'posts';

const initialState: PostReduxState = {
  posts: {
    loading: false,
    data: [],
    total: null,
    error: null,
  },
  addPost: {
    loading: false,
    error: null,
  },
};

const postsSlice = createSlice({
  name: POSTS,
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(`${postsAsyncAction.getPosts.request}`, (state) => {
        state.posts.loading = true;
      })
      .addCase(
        `${postsAsyncAction.getPosts.success}`,
        (state, action: PayloadAction<{ posts: Post[]; total: number }>) => {
          const { posts, total } = action.payload;
          state.posts.loading = false;
          state.posts.data = [...state.posts.data, ...posts];

          state.posts.total = total;
        },
      )
      .addCase(
        `${postsAsyncAction.getPosts.failure}`,
        (state, action: PayloadAction<APIError>) => {
          state.posts.loading = false;
          state.posts.error = action.payload;
        },
      )
      .addCase(`${postsAsyncAction.addPosts.request}`, (state) => {
        state.addPost.loading = true;
      })
      .addCase(
        `${postsAsyncAction.addPosts.success}`,
        (state) => {
          state.addPost.loading = false;
        },
      )
      .addCase(
        `${postsAsyncAction.addPosts.failure}`,
        (state, action: PayloadAction<APIError>) => {
          state.addPost.loading = false;
          state.addPost.error = action.payload;
        },
      );
  },
});

const selfSelector = (state: RootState) => state[POSTS];

const postsSelector = createSelector(selfSelector, (state) => state.posts);

export const PostsSelector = {
  loading: createSelector(postsSelector, (posts) => posts.loading),
  data: createSelector(postsSelector, (posts) => posts.data),
  total: createSelector(postsSelector, (posts) => posts.total),
  error: createSelector(postsSelector, (posts) => posts.error),
};

const addPostSelector = createSelector(selfSelector, (state) => state.addPost);

export const AddPostSelector = {
  loading: createSelector(addPostSelector, (addPost) => addPost.loading),
  error: createSelector(addPostSelector, (addPost) => addPost.error),
};

export const postsAction = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
