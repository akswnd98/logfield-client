import './index.scss';
import { doAfterMyPageConstruct } from './App/MyPage/doAfter';
import login from './utils/api/login';
import { appComponent } from './App/components';
import AppInst from './App/inst';
import { userProfileModel } from './App/models';
import getMyProfile from './utils/api/user/getMyProfile';
import { refresh } from './utils/refresh';
import { PUBLIC_URL } from './environment';
import signup from './utils/api/signup';

const root = document.getElementById('root')!;

(async () => {
  if (new RegExp(`^${PUBLIC_URL}/login$`).test(location.pathname)) {
    const params = new URLSearchParams(location.search);
    const uuid = params.get('uuid');
    if (uuid !== null) {
      const res = await login(uuid);
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
    }
    location.href = `${PUBLIC_URL}/`;
  }
  if (new RegExp(`^${PUBLIC_URL}/signup$`).test(location.pathname)) {
    const params = new URLSearchParams(location.search);
    const uuid = params.get('uuid');
    if (uuid !== null) {
      await signup(uuid);
    }
    location.href = `${PUBLIC_URL}/`;
  }

  try {
    await userProfileModel.setData(await getMyProfile());
  } catch (e) {
    try {
      await refresh();
      await userProfileModel.setData(await getMyProfile());
    } catch (e) {
    }
  }

  root.appendChild(appComponent);
  await new AppInst().manipulate(appComponent);
  if (new RegExp(`^${PUBLIC_URL}/my-page/$`).test(location.pathname)) {
    await doAfterMyPageConstruct();
  }
})();
