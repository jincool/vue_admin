// 检查ip
export function validateIP(rule, value,callback) {
    if(value==''||value==undefined||value==null){
        callback();
    }else {
        const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        if ((!reg.test(value)) && value != '') {
            callback(new Error('请输入正确的IP地址'));
        } else {
            callback();
        }
    }
}
// 检查手机号或者固话
export function validatePhoneTwo(rule, value, callback) {
    const reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;;
    if (value == '' || value == undefined || value == null) {
        callback();
    } else {
        if ((!reg.test(value)) && value != '') {
            callback(new Error('请输入正确的电话号码或者固话号码'));
        } else {
            callback();
        }
    }
}
// 是否手机
export function validatePhone(rule, value,callback) {
    const reg =/^[1][3-9][0-9]{9}$/;
    if(value==''||value==undefined||value==null){
        callback();
    }else {
        if ((!reg.test(value)) && value != '') {
            callback(new Error('请输入正确的电话号码'));
        } else {
            callback();
        }
    }
}
// 是否身份证
export function validateIdNo(rule, value,callback) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(value==''||value==undefined||value==null){
        callback();
    }else {
        if ((!reg.test(value)) && value != '') {
            callback(new Error('请输入正确的身份证号码'));
        } else {
            callback();
        }
    }
}
//是否是邮箱
export function validateEMail(rule, value,callback) {
    const reg =/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
    if(value==''||value==undefined||value==null){
        callback();
    }else{
        if (!reg.test(value)){
            callback(new Error('请输入正确的邮箱'));
        } else {
            callback();
        }
    }
}
// 是否整数
export function isInteger(rule, value, callback) {
    if (!value) {
        return callback(new Error('输入不可以为空'));
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入正整数'));
        } else {
            const re = /^[0-9]*[1-9][0-9]*$/;
            const rsCheck = re.test(value);
            if (!rsCheck) {
                callback(new Error('请输入正整数'));
            } else {
                callback();
            }
        }
    }, 0);
}
// 两位小数验证
const validateValidity = (rule, value, callback) => {
    if (!/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(value)) {
        callback(new Error('最多两位小数！！！'));
    } else {
        callback();
    }
};
// 密码验证
export const validatePsdReg = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请输入密码'))
    }
    if (!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/.test(value)) {
        callback(new Error('请输入6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种'))
    } else {
        callback()
    }
}
// 中文校验
export const validateContacts = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请输入中文'))
    }
    if (!/^[\u0391-\uFFE5A-Za-z]+$/.test(value)) {
        callback(new Error('不可输入特殊字符'))
    } else {
        callback()
    }
}
// 账号校验
export const validateCode = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请输入账号'))
    }
    if (!/^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/.test(value)) {
        callback(new Error('账号必须为6-20位字母和数字组合'))
    } else {
        callback()
    }
}
// 纯数字校验
export const validateNumber = (rule, value, callback) => {
    let numberReg = /^\d+$|^\d+[.]?\d+$/
    if (value !== '') {
        if (!numberReg.test(value)) {
            callback(new Error('请输入数字'))
        } else {
            callback()
        }
    } else {
        callback(new Error('请输入值'))
    }
}
