import { useQuery } from 'react-query';
import { service } from '@src/apis';
import { Post } from '@src/interface/posts';
import { useMemo } from 'react';

const usePostsFetch = () => {
  const {
    isLoading,
    isError,
    data: postData,
  } = useQuery('posts', service.getPostList);

  const posts = useMemo(
    () =>
      postData?.data?.map((post: Post) => ({
        id: post.id,
        title: post.title,
        author: post.author,
        createdAt: post.createdAt,
      })),
    [postData],
  );

  return {
    postsLoading: isLoading,
    posts: posts || [],
    total: posts?.length || 0
  };
};

export default usePostsFetch;
