import { AxiosResponse } from 'axios';
import Client from '@src/apis/client';

import { now } from '@src/utils/day';
import type { AddPostRequest } from '@src/interface/posts';

const service = {
  async getPostList(limit: number = 10) {
    const res: AxiosResponse = await Client.instance.get(
      `${Client.path.Api}/posts?_limit=${limit}`,
    );
    return res;
  },

  async getPostDetailInformation(postId: number) {
    if (!postId) return {};
    const res: AxiosResponse = await Client.instance.get(
      `${Client.path.Api}/posts/${postId}`,
    );
    return res;
  },

  async addPost(addPostRequest: AddPostRequest) {
    const res: AxiosResponse = await Client.instance.post(
      `${Client.path.Api}/posts`,
      { ...addPostRequest, createdAt: now() },
    );
    return res;
  },
};

export default service;
