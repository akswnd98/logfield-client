import axiosInstance from '..';

export type ResponseParam = {
  accessToken: string;
  refreshToken: string;
};

async function login (uuid: string) {
  return (await axiosInstance.get<ResponseParam>(
    '/api/login',
    { params: { uuid }}
  )).data;
}

export default login;
