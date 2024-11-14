import axios from 'axios';

const api = axios.create({
  baseURL: '',
  timeout: 1000,
});

api.interceptors.request.use(
  (config) => {
    // 요청이 전달되기 전에 작업 수행 -> 여기에 member pk값을 저장하면 될거같다!
    const memberPK = localStorage.getItem('userNumber');
    if (memberPK) {
      config.headers['Authorization'] = memberPK;
    }
    return config;
  },
  (error) => {
    //요청 오류시 작업 수행
    return Promise.reject(error);
  }
);

export default api;
