import { useCallback } from 'react';
import { useAppDispatch } from '@src/store';

import { postsAsyncAction } from '@src/store/modules/posts/saga';
import type { AddPostRequest } from '@src/interface/posts';

const useAddPostFetch = () => {
  const dispatch = useAppDispatch();

  const addPost = useCallback(
    (addPostRequest: AddPostRequest) => {
      dispatch(postsAsyncAction.addPosts.request(addPostRequest));
    },
    [dispatch],
  );

  return { addPost };
};

export default useAddPostFetch;
