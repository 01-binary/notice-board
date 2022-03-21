import { AxiosResponse } from 'axios';
import Client from '@src/apis/client';

const service = {
  async getBoardList() {
    const res: AxiosResponse = await Client.instance.get(
      `${Client.path.carApi}/boardList`,
    );
    return res.data;
  },

  async getBoardDetailInformation(boardId: number) {
    if (!boardId) return {};
    const res: AxiosResponse = await Client.instance.get(
      `${Client.path.carApi}/boardList/${boardId}`,
    );
    return res.data;
  },
};

export default service;
