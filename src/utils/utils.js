import { Message ,MessageBox } from 'element-ui'
import Axios from '@/api/api'

/**
 * 删除弹出框
 * @param url 请求地址
 * @param pramas 请求参数
 * @API 返回status状态，1为成功
 * @returns {Promise<any>}
 */
export function deleteBox( url, pramas) {
    return new Promise((resolve, reject) => {
        MessageBox.confirm('此操作将删除该选项, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(({value}) => {
            console.log(value)
            Axios.post(url, pramas).then(res => {
                if (res.data.status === 1) {
                    Message({
                        type: 'info',
                        message: '操作成功'
                    });
                    resolve(res.data.status);
                }else {
                    reject( Message({
                        type: 'info',
                        message: '操作失败'
                    }))
                }
            })
        }).catch(() => {
            console.log('shibai')
            Message({
                type: 'info',
                message: '取消输入'
            });
        });
    }).catch(err => {
        console.log(err);
    })
}