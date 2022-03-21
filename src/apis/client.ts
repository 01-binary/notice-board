import axios from 'axios';

const Client = {
  path: {
    carApi: 'http://localhost:8080',
  },
  instance: axios.create({ timeout: 20000 }),
};

export default Client;
