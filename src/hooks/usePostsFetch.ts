import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@src/store';

import { PostsSelector } from '@src/store/modules/posts';
import { postsAsyncAction } from '@src/store/modules/posts/saga';

const usePostsFetch = () => {
  const dispatch = useAppDispatch();

  const [postsLoading, postsError] = [
    useAppSelector(PostsSelector.loading),
    useAppSelector(PostsSelector.error),
  ];

  const getPosts = useCallback(() => {
    dispatch(postsAsyncAction.getPosts.request({}));
  }, [dispatch]);

  return { postsLoading, getPosts };
};

export default usePostsFetch;
