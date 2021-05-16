import axios from "axios";
import queryString from "query-string";
import constants from "../utils/constants";
import AsyncStorage from '@react-native-async-storage/async-storage';


const axiosClient = axios.create({
    baseURL: constants.BASE_API_URL,
    headers: {
        "content-type": "application/json",
        "user-role": "USER"
    },
    paramsSerializer: params => queryString.stringify(params),
    timeout: 10000
});

axiosClient.interceptors.request.use(
    async config => {
        try {
            const accessToken = await AsyncStorage.getItem("accessToken");

            config.headers = {
                ...config.headers, "Authorization": `Bearer ${accessToken}`
            };
            return config;

        } catch (e) {
            console.log(e);
        }
    },
    err => Promise.reject(err)
);

axiosClient.interceptors.response.use(
    response => {
        if (response && response.data) {
            return { ...response.data, status: response.status };
        }
        return response;
    },
    err => Promise.reject(err)
);

export default axiosClient;