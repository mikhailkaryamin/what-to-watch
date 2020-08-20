import axios from 'axios';

const StatusCode = {
  UNAUTHORIZED: 401,
};

const createAPI = (onUnauthorized, onErrorNetwork) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {
      response
    } = err;

    if (err.message === `Network Error`) {
      onErrorNetwork();
    } else if (response.status === StatusCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {
  createAPI,
};

