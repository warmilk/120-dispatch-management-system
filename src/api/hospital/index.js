import axois from 'axios';
import qs from 'axios';

export function getHospitalList() {
    return axois.get('/api/org/hospList').then((req) => {
        return Promise.resolve(req.data);
    })
}