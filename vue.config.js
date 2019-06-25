// vue.config.js
module.exports = {
    // 选项...
    // baseUrl:"./",
    publicPath:"./",
    outputDir:"dist",
    assetsDir:"assets",
    indexPath:"index.html",
    filenameHashing:true,
    pages:undefined,
    lintOnSave:false,
    runtimeCompiler:false,
    transpileDependencies:[],
    productionSourceMap:false,
    crossorigin:undefined,
    integrity:false,
    devServer: {
        // port: 8088, // 端口号
        // host: "localhost",
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            "/api": {
                target: "http://jincool.vue",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            "/foo": {
                target: "url"
            }
        } // 配置多个代理
    },
}