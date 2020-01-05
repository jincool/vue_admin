/**
 * 页面刷新，重新设置菜单栏
 */
import api from '@/api/api'
import store from '@/store/store'
if (sessionStorage.getItem('user')) {
    let user = JSON.parse(sessionStorage.getItem('user'));
    let params = {'rid':user.rid};
    api.post('?a=menu',params).then((res) => {
        let {navData,routerData} = res.data;
            // 将路由信息，菜单信息，用户信息存到sessionStorage里
            sessionStorage.setItem('menuData', JSON.stringify(getMenu(navData)));
            sessionStorage.setItem('routes', JSON.stringify(routerData));
            store.dispatch("add_Routes", routerData) //触发vuex里的增加路由
    })
}

/**
 * 格式化菜单
 * @param data
 * @returns {Array}
 */
function getMenu(data) {
    let navData = [];
    for (var i = 0; i < data.length; i++) {
        let navObj = {
            "id": "",
            "menu_title": "",
            "subs": []
        };
        if (navData.length === 0) {//此步骤可以和下面的合并

            navObj.menu_title = data[i].menu_name;
            navObj.id = data[i].menu_id;
            let url  =data[i].component.substring(data[i].component.indexOf("\/")+1)
            let navSubObj = {
                "url": url,
                "sub_title": data[i].sub_name
            };
            navObj.subs.push(navSubObj);
            navData.push(navObj);
        } else {
            let flag = false;//编辑此一级菜单是否已经存在
            for (var j = 0; j < navData.length; j++) {

                if (navData[j].menu_title === data[i].menu_name) {//相同一级菜单，push子菜单
                    flag = true;
                    break;
                }
            }
            let url  =data[i].component.substring(data[i].component.indexOf("\/")+1)
            if (flag) {

                let navSubObj = {
                    "url": url,
                    "sub_title": data[i].sub_name
                };
                navData[j].subs.push(navSubObj);
            } else {
                navObj.menu_title = data[i].menu_name;
                navObj.id = data[i].menu_id;
                let navSubObj = {
                    "url": url,
                    "sub_title": data[i].sub_name
                };
                navObj.subs.push(navSubObj);
                navData.push(navObj);
            }
        }
    }
    return navData;
}