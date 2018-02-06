import axios from 'axios';
import * as Cookie from '@/assets/js/cookie';

/** 配置axios */
let apiUrl = '/api';

var instance = axios.create({
    baseURL: apiUrl, // 设置请求的基础路径
    timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
  });

// axios全局req拦截器（判断有无token）
instance.interceptors.request.use(
  config => {
  // 判断是否存在token，如果存在的话，则每个http header都加上toke
        let authTokenKey = 'token';
        let authCookie = Cookie.getCookie(Cookie.authTokenKey);
      if (authCookie) { 
          // config.headers.Authorization = `token ${getCookie('token')}`
          config.headers.common[`${authTokenKey}`] = authCookie
      }
      return config
  },
  err => {
      console.info(err);
      return Promise.reject(err);
  }
)

// axios全局res拦截器
let anthExpiredCode = 101;
instance.interceptors.response.use(
  response => {
      switch (response.data.errorCode) {
          case anthExpiredCode:
              Cookie.delCookie('token')
              router.replace({
                  path: '/',
                  query: {
                      redirect: router.currentRoute.fullPath
                  }
              })
              break;
          case 500:
          case 501:
          case 502:
          case 503:
              console.info('服务器错误!')
      }
      return response
  },
  error => {
      console.log(error)
  }
)

export default instance;

