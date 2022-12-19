import { AxiosResponse } from 'axios';
import Client from '@src/apis/client';

import { now } from '@src/utils/day';
import type { AddPostRequest } from '@src/interface/posts';

const service = {
  async getPostList() {
    const res: AxiosResponse = await Client.instance.get(
      `${Client.path.Api}/posts`,
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
