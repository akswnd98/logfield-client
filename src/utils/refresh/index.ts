import { refreshLogin } from '../api/login/refresh';

export async function refresh () {
  try {
    const res = await refreshLogin();
    window.localStorage.setItem('accessToken', res.accessToken);
    window.localStorage.setItem('refreshToken', res.refreshToken);
  } catch (e) {
    console.log(e);
    throw 'refresh failed';
  }
}
