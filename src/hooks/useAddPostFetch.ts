import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@src/store';

import { AddPostSelector } from '@src/store/modules/posts';
import { postsAsyncAction } from '@src/store/modules/posts/saga';
import type { AddPostRequest } from '@src/interface/posts';

const useAddPostFetch = () => {
  const dispatch = useAppDispatch();
  const [addPostLoading, addPostError] = [
    useAppSelector(AddPostSelector.loading),
    useAppSelector(AddPostSelector.error),
  ];

  const addPost = useCallback(
    (params: { addPostRequest: AddPostRequest; onSuccess: () => void }) => {
      dispatch(postsAsyncAction.addPosts.request(params));
    },
    [dispatch],
  );

  return { addPostLoading, addPostError, addPost };
};

export default useAddPostFetch;
