import Vue from 'vue'
import qs from 'qs'
import axios from 'axios'
// import { api_url } from './env'

let axiosIns = axios.create({})
// 默认配置
axiosIns.defaults.baseURL = apiUrl;
axiosIns.defaults.timeout = 3000;//设置超市时间
// axiosIns.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charse=UTF-8';
axiosIns.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axiosIns.defaults.responseType = 'json';
axiosIns.defaults.transformRequest = [
    data => {
        data.appid = '1';
        data.token = 'e10adc3949ba59abbe56e057f20f883e';
        // 序列化数据
        return qs.stringify(data);
    }
    
]
axiosIns.defaults.validateStatus = status => {
    return true
}

// 请求拦截器
axiosIns.interceptors.request.use(config => {
    return config
},error => {
    return Promise.reject(error)
})

// 响应拦截器
axiosIns.interceptors.response.use(response => {
    let data = response.data;
    let status = response.status;
    if(status === 200) {
        return Promise.resolve(data)
    }else {
        return Promise.reject(response)
    }
})

let ajaxMethod = ['get', 'post'];
let api = {};
ajaxMethod.forEach((method) => {
    api[method] = (url, data, config) => {
        return new Promise((resolve, reject) => {
            axiosIns[method](url, data, config).then((response) => {
                if(response.code == 0){
                    resolve(response)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    }
})

export default api