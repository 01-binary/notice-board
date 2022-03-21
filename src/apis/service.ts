import { AxiosResponse } from 'axios';
import Client from '@src/apis/client';

const service = {
  async getPostList() {
    const res: AxiosResponse = await Client.instance.get(
      `${Client.path.carApi}/posts`,
    );
    return res.data;
  },

  async getPostDetailInformation(postId: number) {
    if (!postId) return {};
    const res: AxiosResponse = await Client.instance.get(
      `${Client.path.carApi}/posts/${postId}`,
    );
    return res.data;
  },

  async addPost(addPostRequest: any) {

  }
};

export default service;
