import axiosInstance from '../..';

export type EdgeDatas = {
  id: number;
  fromId: number;
  toId: number;
};

export type ResponseParam = {
  datas: EdgeDatas[];
};

async function findMyEdges () {
  return (await axiosInstance.get<ResponseParam>('/api/edge/findMyEdges', {})).data;
}

export default findMyEdges;
