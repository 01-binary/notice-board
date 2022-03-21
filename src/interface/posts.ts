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
    error: APIError | null;
  };
  selectedPost: {
    loading: boolean;
    id: number | null;
    data: Post | {};
    error: APIError | null;
  };
  addPost: {
    loading: boolean;
    error: APIError | null;
  };
}

export interface AddPostRequest {
  title: string;
  author: string;
  content: string;
}

export type AddPostInput = keyof AddPostRequest
