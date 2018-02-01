import axios from 'axios';
import qs from 'qs';


export function getRegionList() {
  return axios.get('/api/sys/regionList').then(req => {
    return Promise.resolve(req.data);
  })
}

export function receiveCommon(data) {
  return axios.post('/api/event/receiveCommon',qs.stringify(data)).then((req) => {
    return Promise.resolve(req.data);
  })
}
