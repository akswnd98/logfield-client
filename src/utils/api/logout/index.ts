import axiosInstance from '..';

async function logout (refreshToken: string) {
  return (await axiosInstance.get<void>(
    '/api/logout',
    { params: { refreshToken }}
  )).data;
}

export default logout;
