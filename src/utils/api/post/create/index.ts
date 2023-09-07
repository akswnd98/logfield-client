import axiosInstance from "../..";

export type ResponseParam = {
  id: number;
};

async function create (title: string, body: string) {
  return (
    await axiosInstance.get<ResponseParam>(
      '/api/post/create',
      { params: { title, body }}
    )
  ).data;
}

export default create;
