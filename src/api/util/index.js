import axios from '@/api/';
import qs from 'qs';


/**
 * Get Method.
 * @param {tring} url 
 * @param {object} data 
 */
export function Get(url, data) {
    return axios.get(url, qs.stringify(data)).then(resp => {
        if(200 === resp.status)
            return Promise.resolve(resp.data);
        return Promise.reject(resp);
    }).then(data => {
        if( 1 === data.returnCode)
            return Promise.resolve(data);
        return Promise.reject(data);
    }).catch(data => {
        return Promise.reject(data.errorMsg);
    })
}

/**
 * Post Method.
 * Request wrong if status of response is not equal `200`
 * Anything error if ``returnCode`` is not equal `1` according to backend contract.
 * @param {string} url 
 * @param {object} data 
 */
export function Post(url, data) {
    return axios.post(url, qs.stringify(data)).then(resp => {
        if(200 === resp.status)
            return Promise.resolve(resp.data);
        return Promise.reject(resp);
    }).then(data => {
        if( 1 === data.returnCode)
            return Promise.resolve(data);
        return Promise.reject(data);
    }).catch(data => {
        return Promise.reject(data.errorMsg);
    })
}

export function JPost(url, data) {
    return axios.post(url, data, {
        headers: {"Content-Type": 'application/json'}
    }).then(resp => {
        if(200 === resp.status)
            return Promise.resolve(resp.data);
        return Promise.reject(resp);
    }).then(data => {
        if( 1 === data.returnCode)
            return Promise.resolve(data);
        return Promise.reject(data);
    }).catch(data => {
        return Promise.reject(data.errorMsg);
    })
}

