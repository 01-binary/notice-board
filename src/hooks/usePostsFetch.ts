import { useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@src/store';

import { PostsSelector } from '@src/store/modules/posts';
import { postsAsyncAction } from '@src/store/modules/posts/saga';

import type { Post } from '@src/interface/posts';

const usePostsFetch = () => {
  const dispatch = useAppDispatch();

  const [postsLoading, rawPosts, total, postsError] = [
    useAppSelector(PostsSelector.loading),
    useAppSelector(PostsSelector.data),
    useAppSelector(PostsSelector.total),
    useAppSelector(PostsSelector.error),
  ];

  const getPosts = useCallback(() => {
    dispatch(postsAsyncAction.getPosts.request({}));
  }, [dispatch]);

  const posts = useMemo(
    () =>
      rawPosts.map((post: Post) => ({
        id: post.id,
        title: post.title,
        author: post.author,
        createdAt: post.createdAt,
      })),
    [rawPosts],
  );
  return { postsLoading, posts, getPosts, total };
};

export default usePostsFetch;
