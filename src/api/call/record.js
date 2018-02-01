import {Get, Post} from 'api/';

export function getCallRecord(data) {
    return Post('/api/callRecord/listAll', data);
}