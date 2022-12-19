import type { APIError } from './error';

export interface Post {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  content: string;
}

export interface PostReduxState {
  posts: {
    loading: boolean;
    data: Post[] | [];
    total: number | null;
    error: APIError | null;
  };
  addPost: {
    loading: boolean;
    error: APIError | null;
  };
}

export type AddPostRequest = {
  title: string;
  author: string;
  content: string;
};

export type AddPostInput = keyof AddPostRequest;
