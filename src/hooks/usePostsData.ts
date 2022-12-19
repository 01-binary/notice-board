import { useMemo } from 'react';
import { useAppSelector } from '@src/store';

import { PostsSelector } from '@src/store/modules/posts';

import type { Post } from '@src/interface/posts';

const usePostsData = () => {
  const [rawPosts, total] = [
    useAppSelector(PostsSelector.data),
    useAppSelector(PostsSelector.total),
  ];


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

  return { posts, total };
};

export default usePostsData;
