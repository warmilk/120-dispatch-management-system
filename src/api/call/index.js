import {Get, Post, JPost} from '@/api/util';

export function getRegionList() {
  return Get('/sys/regionList');
}

export function receiveCommon(data) {
  return Get('/event/receiveCommon',qs.stringify(data));
}
