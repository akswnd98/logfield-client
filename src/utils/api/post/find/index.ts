import axiosInstance from '../..';

export type ResponseParam = {
  id: number;
  title: string;
  body: string;
  firstUpload: Date;
  lastUpdated: Date;
};

async function find (id: number) {
  return (await axiosInstance.get<ResponseParam>(
    '/api/post/find', { params: { id } }
  )).data;
}

export default find;
