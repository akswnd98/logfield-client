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

async function findMyPosts () {
  return (await axiosInstance.get<ResponseParam>(
    '/api/post/findMyPosts', {}
  )).data;
}

export default findMyPosts;
