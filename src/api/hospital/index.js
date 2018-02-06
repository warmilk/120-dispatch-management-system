import {Get, Post, JPost} from '@/api/util';

export function getHospitalList() {
    return Get('/hospList');
}