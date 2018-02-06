import {Get, Post, JPost} from '@/api/util';


export function getCallRecord(data) {
    return Post('/api/callRecord/listAll', data);
}