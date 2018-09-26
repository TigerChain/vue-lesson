/**
 * @Description: 封装一个通用的 ajax 请求
 * @Author:      TigerChain 
 */
function customXHR(options) {
	options  = options || {}
	options.methods = options.methods.toUpperCase() || 'GET'
	options.url = options.url || ''
	 // 默认是异步请求
    options.async = options.async || true
    options.data = options.data || {}
    options.success = options.success || function() {}
    options.faile = options.faile || function () {}    
    console.log(options)  

    var xhr = null 
    // 新的浏览器支持
    if(window.XMLHttpRequest) {
    	xhr=new XMLHttpRequest();
    }else { // IE 5 IE6 支持
    	xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 请求参数的封装
    var params = [] 

    for(var param in options.data){
        params.push(param +'='+options.data[param])
    }
    // 每个请求参数后面添加一个 &
    var requestData = params.join('&')
    // 请求类型，默认是 GET
    var requestType =  options.methods.toUpperCase() 

    if(requestType == 'GET'){
    	xhr.open(requestType,options.url+'?'+
            requestData,options.async)
    	xhr.send()
    }else if(requestType =="POST"){
    	xhr.open(requestType,options.url,options.async)
    	xhr.setRequestHeader("Content-type",
            "application/x-www-form-urlencoded;charset=utf-8");
        xhr.send(requestData)
    }
    /** readyState 说明：
    0: 请求未初始化
	1: 服务器连接已建立
	2: 请求已接收
	3: 请求处理中
	4: 请求已完成，且响应已就绪
    **/
    xhr.onreadystatechange = function() {
    	if(xhr.readyState == 4 && xhr.status ==200){
    		options.success(xhr.responseText)
    	}else if (xhr.status !=200){
    		options.faile('request error')
    	}
    }
}

// 调用封装的 ajax 方法
customXHR({
	methods:'GET',
	url:'../test.js', // 加载外部 js 
	data:{},
	success:function(res) {
		eval(res)
		// 执行 test.js 中的 outputLog 方法
		eval('outputLog("在 test.js 中调用方法")')
	},
	faile:function(msg){
		console.log(msg)
	}
})

console.log('xhr_async_request 中调用')









