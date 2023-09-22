import axiosInstance from "../..";

async function requestLoginCertification (email: string) {
  await axiosInstance.get(
    '/api/login/requestCertification',
    { params: { email }}
  );
}

export default requestLoginCertification;
