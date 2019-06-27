//  设置本地缓存
const setStore = (key, value) => {
    if(!key) return
    if(typeof value != 'string'){
        value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
}

//  获取本地缓存
const getStore = (key) => {
    if(!key) return
    return window.localStorage.getItem(key)
}

//  清除本地缓存
const removeStore = (key) => {
    if(!key) return
    window.localStorage.removeItem(key)
}

//  时间戳转换
const formatDate = (date, fmt) => {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

//  获取路由参数
const getUrlKey = (name) => {
    const reg = `(^|&)${name}=([^&]*(&|$))`;
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    } else {
        return false;
    }
}

//  获取cookie
const  getCookie = (c_name) => {
    var that = this;　　　　
    if (document.cookie.length > 0) {
        //检查这个cookie是否存在，不存在就为 -1
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            //获取cookie值的开始位置
            c_start = c_start + c_name.length + 1;
            //通过";"号是否存在来判断结束位置
            c_end = document.cookie.indexOf(";", c_start);

            if (c_end == -1){
                c_end = document.cookie.length;
            }
            //通过substring()得到了值
            return unescape(document.cookie.substring(c_start, c_end))　　 
        }　　　　
    }　　　　
    return ""　　
}

export {
    setStore,
    getStore,
    removeStore,
    formatDate,
    getUrlKey,
    getCookie
}