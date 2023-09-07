import axiosInstance from '../..';

export type EdgeDatas = {
  id: number;
  fromId: number;
  toId: number;
};

export type ResponseParam = {
  datas: EdgeDatas[];
};

async function findAll () {
  return (await axiosInstance.get<ResponseParam>('/api/edge/findAll', {})).data;
}

export default findAll;
