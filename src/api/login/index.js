import axios from 'axios';
import qs from 'qs';
import {Get} from '@/api/index';

// webpack的config/index下开了代理，调接口的时候这样调··
// let baseURL = '/api'
// export const postLogin = params => {//发送登录表单
//     return axios.post(`${base}/user/login`, params.data).then(res => res.data)
// }


export function login(username, password) {
    const data = {
        username: username,
        password: password
    }
    return axios.post('/api/login',qs.stringify(data)
    ).then(req => {
        return Promise.resolve(req.data);
    })
}

export function logout(){
    return Get('/api/logout');
}