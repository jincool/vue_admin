// 懒加载组件
function lazy(url) {
    if (url === 'Index'||url === 'External') {
        return () => import(`@/components/${url}.vue`)
    } else {
        return () => import(`@/views/${url}.vue`)
    }
}
export {lazy}

