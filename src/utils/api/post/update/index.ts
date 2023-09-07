import axiosInstance from '../..';

async function update (id: number, title: string, body: string) {
  await axiosInstance.get('/api/post/update', { params: { id, title, body } });
}

export default update;
