import axiosInstance from '..';

export default async function test () {
  await axiosInstance.get('/api/test', { params: {} });
}
