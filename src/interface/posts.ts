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
    error: any;
  };
  selectedPost: {
    loading: boolean;
    id: number | null;
    data: Post | {};
    error: any;
  };
}
