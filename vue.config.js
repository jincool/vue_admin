// vue.config.js
module.exports = {
    // 选项...
    // baseUrl:"./",
    publicPath:"./",
    outputDir:"dist",
    assetsDir:"assets",
    indexPath:"index.html",
    filenameHashing:true,
    // pages:undefined,
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
                target: "http://localhost/admin",
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
    pages: {
        chart: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/modules/chart/main.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/chart.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            // filename: 'console.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            // title: 'console page',

            // 包含的模块，可选项
            // chunks: ['console']
        },
        // 只有entry属性时，直接用字符串表示模块入口
        index: 'src/main.js'
    }
}