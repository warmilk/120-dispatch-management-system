import {Get, Post, JPost} from 'api/';



export function addList(data) {
    return JPost('/api/blackList/addList', data);
}

export function getList(data) {
    return Post('/api/blackList/list', data);
}
