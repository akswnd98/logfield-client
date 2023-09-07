import axiosInstance from '../..';

export type PostDatas = {
  id: number;
  title: string;
  body: string;
  firstUpload: Date;
  lastUpdated: Date;
};

export type ResponseParam = {
  datas: PostDatas[];
};

async function findAll () {
  return (await axiosInstance.get<ResponseParam>(
    '/api/post/findAll', {}
  )).data;
}

export default findAll;
