import axiosInstance from '../..';

export type RefreshLoginResponse = {
  accessToken: string;
  refreshToken: string;
}

export async function refreshLogin () {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken === null) {
      throw 'no refreshToken';
    }
    return (await axiosInstance.get<RefreshLoginResponse>(
      '/api/login/refresh', {
        params: { refreshToken }
      }
    )).data;
  } catch (e) {
    console.log(e);
    throw 'refreshLogin failed';
  }
}
