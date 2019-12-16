import axios from 'axios'
import Qs from 'qs'
// import {Loading } from 'element-ui'
let Axios= axios.create({
    // baseURL:'/api/',
    baseURL: process.env.NODE_ENV === "development"?'api':'./',
    timeout: 5000 ,// request timeout
    transformRequest: [function (data) { // <--- here 转换数据
        data = Qs.stringify(data); // 通过Qs.stringify转换为表单查询参数
        return data;
    }],
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    }
});
// 请求拦截器
Axios.interceptors.request.use((config) => {
   //  Loading.service({
   //     lock: true,
   // });
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
Axios.interceptors.response.use((response) => {
    // Loading.service({
    //     lock: true,
    // }).close()
    return response
}, (error) => {
    return Promise.reject(error)
})

export default Axios
