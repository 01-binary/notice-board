import { AxiosResponse } from 'axios';
import Client from '@src/apis/client';

const service = {
  async getPostList() {
    const res: AxiosResponse = await Client.instance.get(
      `${Client.path.Api}/posts`,
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

  async addPost(addPostRequest: any) {

  }
};

export default service;
