import axiosInstance from '..';

async function signup (uuid: string) {
  await axiosInstance.get(
    '/api/signup',
    { params: { uuid } }
  );
}

export default signup;
