import axios, { AxiosError } from 'axios';

export const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // Cho phép gửi cookie
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
apiClient.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );
  

// apiClient.interceptors.response.use(
//     (respone) => respone,
//     (error: AxiosError) => {
//         //navigate to login page if 401 error
//         if (error.response?.status === 401) {
//             window.location.href = "/auth";
//         }
//         return Promise.reject(error);
//     }
// );

