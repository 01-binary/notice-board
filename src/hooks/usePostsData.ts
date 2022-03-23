import { useMemo } from 'react';
import { useAppSelector } from '@src/store';

import { PostsSelector, pageSelector } from '@src/store/modules/posts';

import type { Post } from '@src/interface/posts';
import { CONTENT_LIMIT } from '@src/assets/constants';

const usePostsData = () => {
  const [rawPosts, total] = [
    useAppSelector(PostsSelector.data),
    useAppSelector(PostsSelector.total),
  ];
  const page = useAppSelector(pageSelector);

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

  const isNeedMoreFetch = useMemo(() => {
    return !!total && CONTENT_LIMIT * page < total;
  }, [page, total]);
  return { posts, total, page, isNeedMoreFetch };
};

export default usePostsData;
