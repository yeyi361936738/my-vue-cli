export default {
	// 判断是否 ios
	is_ios: function is_ios() {
	    let browserName = navigator.userAgent.toLowerCase();
	    return /(iphone|ipod|ipad)/i.test(browserName);
	},
	// 判断是否 安卓
	is_android: function is_android() {
	    let browserName = navigator.userAgent.toLowerCase();
	    return /(android)/i.test(browserName);
	},
	// 判断是否 微信浏览器
	is_wechat: function is_wechat() {
	    let browserName = navigator.userAgent.toLowerCase();
	    return /(MicroMessenger)/i.test(browserName);
	},
	// 普通页面回退
	back: function native_back() {
		let _json = JSON.stringify({
            event: "back",
            params: ""
        });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 普通页面进入
	jump: function native_jump(url) {
		let _json = JSON.stringify({
            event: "to_jump",
            params: {"url": url}
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 销毁当前页
	jump_and_finish: function(url) {
		let _json = JSON.stringify({
            event: "jump_and_finish",
            params: {"url": url}
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 页面有弹层显示
	show_alert: function() {
		let _json = JSON.stringify({
            event: "show_alert",
            params: ""
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 页面没有弹层
	no_alert: function() {
		let _json = JSON.stringify({
            event: "no_alert",
            params: ""
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 通知APP支付
	pay: function (payInfo) {
		// console.log(payInfo);
		let _json = JSON.stringify({
            event: "native_pay",
            params: payInfo
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	wxPay: function(payInfo){
		console.log(payInfo)
		let _json = JSON.stringify({
            event: "wx_pay",
            params: payInfo
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	aliPay: function(payInfo){
		console.log(payInfo)
		let _json = JSON.stringify({
            event: "ali_pay",
            params: payInfo
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 手机号码
	mobile: function(mobile){
		console.log(mobile)
		let _json = JSON.stringify({
            event: "mobile",
            params: {mobile: mobile}
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 返回时关闭多页,pageName: 页面路由
	close_multy_page: function(pageName) {
		let _json = JSON.stringify({
            event: "close_multy_page",
            params: pageName     // 数据格式，Array
       	});
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 点击扫码
	// scan_type, 1: 
	normal_scan: function(scan_type,role_type,app_scan_type) {
		let _json = JSON.stringify({
	        event: "normal_scan",
	        params: {
	        	scan_type: scan_type,
	        	role_type: role_type,
	        	app_scan_type: app_scan_type
	        }
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 调用内置浏览器
	open_browser: function(url) {
		let _json = JSON.stringify({
	        event: "native_browser",
	        params: {"url": url}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 绑定微信
	bind_wx: function () {
		let _json = JSON.stringify({
	        event: "bind_wx",
	        params: {}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	wxFriends: function(){
		let _json = JSON.stringify({
	        event: "wx_friends",
	        params: {}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	wxCircle: function(){
		let _json = JSON.stringify({
	        event: "wx_circle",
	        params: {}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	nativeScan: function(){
		let _json = JSON.stringify({
	        event: "native_scan",
	        params: {}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	setJpushId:function(){
		let _json = JSON.stringify({
	        event: "setJpushId",
	        params: {}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	login:function(sid){
		let _json = JSON.stringify({
	        event: "login",
	        params: {
						SID: sid
					}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	logout:function(){
		let _json = JSON.stringify({
	        event: "logout",
	        params: {}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	share:function(){
		let _json = JSON.stringify({
	        event: "share",
	        params: {}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 上传头像
	nativeUploadHeadimg: function() {
		let _json = JSON.stringify({
	        event: "native_upload_headimg",
	        params: ''
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 上传图片，可选拍摄或相册
	nativeUploadImg(album, num, isCrop) { // album: 0 拍摄， 1相册; isCrop: 0 不裁剪， 1 裁剪
		let _json = JSON.stringify({
	        event: "native_upload_img",
	        params: {
				album: album,
				maxnum: num,
				isCrop: isCrop
	        }
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 上传不同类型的图片
	nativeUploadImgByType(type) { // album: 0 拍摄， 1相册
		let _json = JSON.stringify({
	        event: "native_upload_img_type",
	        params: {
				type: type
	        }
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 打开淘宝 app
	openTaobao:function(item_link){
		let _json = JSON.stringify({
	        event: "native_open_taobao",
	        params: {
				item_link: item_link
			}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 原生粘贴
	nativePaste: function () {
		let _json = JSON.stringify({
			event: "native_paste",
	        params: {}
		});
		let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 清除缓存
	cleanCache: function () {
		let _json = JSON.stringify({
			event: "native_clean_cache",
	        params: {}
		});
		let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 获取极光id
	getJpushId: function() {
		let _json = JSON.stringify({
			event: "get_jpush",
	        params: {}
		});
		let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 帖子详情页的分享  1：微信好友   	2：朋友圈		3：QQ好友		4：QQ空间
	/*
	 *   shareInfo = {
	 * 		type: '',
	 * 		share_title: '',    // 标题
	 * 		desc: '',           // 描述
	 * 		basc_pic: '',       // logo
	 * 		share_url: ''       // 分享的页面链接
	 * 	 }
	 */
	native_post_share: function(shareInfo) {
		let _json = JSON.stringify({
	        event: "native_post_share",
	        params: shareInfo
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 获取版本号
	native_get_version: function() {
		let _json = JSON.stringify({
	        event: "native_get_version",
	        params: {}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// 获取缓存
	native_get_cache: function() {
		let _json = JSON.stringify({
	        event: "native_get_cache",
	        params: {}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	// app端是否隐藏tabbar，传递筛选信息
	native_show_tabbar: function(index,str) {
		let _json = JSON.stringify({
	        event: "native_show_tabbar",
	        params: {
						tabIndex: index,
						screen: json,//筛选条件
					}
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
	//告诉ios需要跳往登陆页面
	native_login:function(){
		console.log('native_login')
		let _json = JSON.stringify({
	        event: "native_login",
	    });
        let browserName = navigator.userAgent.toLowerCase();
        if(/(iphone|ipod|ipad)/i.test(browserName)){
			window.webkit.messageHandlers.webviewEvent.postMessage(_json);
		}else if(/(android)/i.test(browserName)){
			window.ResultAndroid.webviewEvent(_json);
		}
	},
}
