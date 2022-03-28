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
  selectedPost: {
    loading: false,
    data: null,
    error: null,
  },
  addPost: {
    loading: false,
    error: null,
  },
  page: 1,
};

const postsSlice = createSlice({
  name: POSTS,
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page;
    },
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
        (state, action: PayloadAction<{ post: Post }>) => {
          state.addPost.loading = false;
          if (state.page !== 1) {
            state.posts.data = [];
            state.page = 1;
          }
        },
      )
      .addCase(
        `${postsAsyncAction.addPosts.failure}`,
        (state, action: PayloadAction<APIError>) => {
          state.addPost.loading = false;
          state.addPost.error = action.payload;
        },
      )
      .addCase(`${postsAsyncAction.getSelectedPost.request}`, (state) => {
        state.selectedPost.loading = true;
      })
      .addCase(
        `${postsAsyncAction.getSelectedPost.success}`,
        (state, action: PayloadAction<{ post: Post }>) => {
          state.selectedPost.loading = false;
          state.selectedPost.data = action.payload.post;
        },
      )
      .addCase(
        `${postsAsyncAction.getSelectedPost.failure}`,
        (state, action: PayloadAction<APIError>) => {
          state.selectedPost.loading = false;
          state.selectedPost.error = action.payload;
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

const selectedPostSelector = createSelector(
  selfSelector,
  (state) => state.selectedPost,
);

export const SelectedPostSelector = {
  loading: createSelector(
    selectedPostSelector,
    (selectedPost) => selectedPost.loading,
  ),
  data: createSelector(
    selectedPostSelector,
    (selectedPost) => selectedPost.data,
  ),
  error: createSelector(
    selectedPostSelector,
    (selectedPost) => selectedPost.error,
  ),
};

const addPostSelector = createSelector(selfSelector, (state) => state.addPost);

export const AddPostSelector = {
  loading: createSelector(addPostSelector, (addPost) => addPost.loading),
  error: createSelector(addPostSelector, (addPost) => addPost.error),
};

export const pageSelector = createSelector(selfSelector, (state) => state.page);

export const postsAction = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
