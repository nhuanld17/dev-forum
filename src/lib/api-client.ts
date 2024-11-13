import axios, {AxiosError} from "axios";

export const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
});

apiClient.interceptors.response.use(
    (respone) => respone,
    (error: AxiosError) => {
        //navigate to login page if 401 error
        if (error.response?.status === 401) {
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

