import axios from "axios";
import {baseURL} from "../constants";


// const apiKey = 'a3f4f37a4fa4bda3c57a5fdcba75660d';

const axiosService = axios.create({
    baseURL
});
//
// axiosService.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${apiKey}`;
//     return config
// }, (error) => {
//     return Promise.reject(error)
// })

export {axiosService}