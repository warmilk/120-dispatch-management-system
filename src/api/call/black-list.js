import {Get, Post, JPost} from '@/api/util';



export function addList(data) {
    return JPost('/blackList/addList', data);
}

export function getList(data) {
    return Post('/blackList/list', data);
}
