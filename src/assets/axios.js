import axios from 'axios'

var BASE_API = "http://10.20.0.56:8393";
const service = axios.create({
    baseURL: BASE_API,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        return config;
    }, error => {
        // console.log(error);
        Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.code === '0') {
            return response.data;
        } else {
            alert(res.message);
            return Promise.reject('error');
        }
    },
    error => {
        // console.log('err' + error);
        alert(error.message);
        return Promise.reject(error);
    });

export default service;
