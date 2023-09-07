import axiosInstance from '../..';

async function deleteNode (id: number) {
  await axiosInstance.get<void>(
    '/api/post/delete',
    { params: { id } }
  );
}

export default deleteNode;
