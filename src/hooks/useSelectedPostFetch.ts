import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@src/store';

import { SelectedPostSelector } from '@src/store/modules/posts';
import { postsAsyncAction } from '@src/store/modules/posts/saga';

const useSelectedPostFetch = () => {
  const dispatch = useAppDispatch();
  const [selectedPostLoading, selectedPost, selectedPostError] = [
    useAppSelector(SelectedPostSelector.loading),
    useAppSelector(SelectedPostSelector.data),
    useAppSelector(SelectedPostSelector.error),
  ];

  const getSelectedPost = useCallback(
    (id: number) => {
      dispatch(postsAsyncAction.getSelectedPost.request({ id }));
    },
    [dispatch],
  );
  return { getSelectedPost, selectedPostLoading, selectedPost };
};

export default useSelectedPostFetch;
