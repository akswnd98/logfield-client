import axiosInstance from '../..';

async function deleteEdge (id: number) {
  await axiosInstance.get<void>(
    '/api/edge/delete',
    { params: { id } }
  );
}

export default deleteEdge;
