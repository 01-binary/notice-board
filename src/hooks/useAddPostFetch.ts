import type { AddPostRequest } from '@src/interface/posts';
import { useMutation, useQueryClient } from 'react-query';
import { service } from '@src/apis';

const useAddPostFetch = () => {
  const queryClient = useQueryClient();
  const addPost = useMutation(
    (addPostRequest: AddPostRequest) => service.addPost(addPostRequest),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    },
  );

  return {
    addPostLoading: addPost.isLoading,
    addPostError: addPost.isError,
    addPost,
  };
};

export default useAddPostFetch;
