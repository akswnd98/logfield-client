import axiosInstance from "../..";

async function requestSignupCertification (email: string, nickname: string) {
  await axiosInstance.get(
    '/api/signup/requestCertification',
    { params: { email, nickname }}
  );
}

export default requestSignupCertification;
