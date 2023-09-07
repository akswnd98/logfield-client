import axiosInstance from '../..';

export type ResponseParam = {
  id: number;
};

async function create (fromId: number, toId: number) {
  return (
    await axiosInstance.get<ResponseParam>(
      '/api/edge/create',
      { params: { fromId, toId } }
    )
  ).data
}

export default create;
