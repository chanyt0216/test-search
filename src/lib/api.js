import axios from 'config/axios';

export async function getPosts(text = '', topics = '') {
  return axios.get(`/search?q=${text}&t=${topics}`).then((res) => {
    return res.data;
  });
}
