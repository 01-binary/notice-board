import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@src/store';

import {
  PostsSelector,
  pageSelector,
  postsAction,
} from '@src/store/modules/posts';
import { postsAsyncAction } from '@src/store/modules/posts/saga';

const usePostsFetch = () => {
  const dispatch = useAppDispatch();

  const [postsLoading, postsError] = [
    useAppSelector(PostsSelector.loading),
    useAppSelector(PostsSelector.error),
  ];
  const page = useAppSelector(pageSelector);

  const getPosts = useCallback(() => {
    dispatch(postsAsyncAction.getPosts.request({ page }));
  }, [dispatch, page]);

  const setPage = useCallback(() => {
    dispatch(postsAction.setPage({ page: page + 1 }));
  }, [dispatch, page]);

  useEffect(() => {
    getPosts();
  }, [page]);

  return { postsLoading, setPage, getPosts };
};

export default usePostsFetch;
