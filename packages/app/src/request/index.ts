import axios, { AxiosResponse } from 'axios';
import { User } from 'oem-model';
import {origin} from '../config'
const instance = axios.create({
  baseURL: `${origin}/api/`,
  timeout: 10000,
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(response)
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export async function login(param: Partial<User> ): Promise<AxiosResponse> {
  return instance.post('/user/user_login', param);
}