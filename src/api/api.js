import axios from 'axios'
import Qs from 'qs'
let Axios= axios.create({
    // baseURL:'/api/',
    baseURL: process.env.NODE_ENV === "development"?'api':'./',
    transformRequest: [function (data) { // <--- here 转换数据
        data = Qs.stringify(data); // 通过Qs.stringify转换为表单查询参数
        return data;
    }],
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    }
});
// const api = {
//   login (username, password) {
//     let params={
//       'username':username, 'password':password
//     }
//     return Axios.post('?a=menu',params)
//   }
// };

export default Axios
