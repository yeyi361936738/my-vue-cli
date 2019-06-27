/* 
配置生产环境和开发环境的生产地址、路由模式
*/
let api_url;
let router_mode = 'hash';

if(process.env.NODE_ENV == 'development'){
    api_url = 'http://shoujizhihuan.118.easysoft168.com'//开发环境
}else if(process.env.NODE_ENV == 'production'){
    api_url = 'production.com'//生产环境
}

export {api_url, router_mode}