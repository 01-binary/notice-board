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
    error: null,
  },
  selectedPost: {
    loading: false,
    id: null,
    data: {},
    error: null,
  },
};

const postsSlice = createSlice({
  name: POSTS,
  initialState,
  reducers: {
    setSelectedPost(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      state.selectedPost.id = id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        `${postsAsyncAction.getPosts.request}`,
        (state) => {
          state.posts.loading = true;
        },
      )
      .addCase(
        `${postsAsyncAction.getPosts.success}`,
        (
          state,
          action: PayloadAction<{ posts: Post[] }>,
        ) => {
          state.posts.loading = false;
          state.posts.data = action.payload.posts;
        },
      )
      .addCase(
        `${postsAsyncAction.getPosts.failure}`,
        (state, action: PayloadAction<APIError>) => {
          state.posts.loading = false;
          state.posts.error = action.payload;
        },
      );
  },
});

const selfSelector = (state: RootState) => state[POSTS];

const postsSelector = createSelector(selfSelector, (state) => state.posts);

export const postsAction = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
