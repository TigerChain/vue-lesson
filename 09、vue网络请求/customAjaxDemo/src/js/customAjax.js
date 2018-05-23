/**
 * @Description: 封装 ajax 请求
 * @Author:      TigerChain
 */
import Vue from 'vue'
function ajax(options) {
	options = options || {}
	options.methods = options.methods.toUpperCase() || 'GET'
	options.url = options.url || ''
	options.async = options.async || true
	options.data = options.data || {}
	options.success = options.success || function() {}
	options.faile = options.faile || function () {}

	console.log(options)

	let xhr = null

	if(window.XMLHttpRequest) {
		xhr = new XMLHttpRequest()
	}else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP")
	}

	let params = []
	// 遍历请求参数对象，拼接请求参数
	for(let param in options.data){
		params.push(param +'='+options.data[param])
	}
  // 给每个数组后面添加一个 &
	let requestData = params.join('&')
	// 请求类型
	let requestType = options.methods.toUpperCase()
  // 如果是 GET 请求
	if(requestType == 'GET'){
		xhr.open(requestType,options.url+'?'+requestData,options.async)
		xhr.send()
	}else if(requestType == 'POST'){ // 如果是 POST 请求
		xhr.open(requestType,options.url,options.async)
		xhr.setRequestHeader("Content-type",
		"application/x-www-form-urlencoded;charset=utf-8");
		xhr.send(requestData)
	}

	xhr.onreadystatechange = function() {
		if (xhr.readyState==4 && xhr.status==200) {
			options.success(JSON.parse(xhr.responseText))
		}else if(xhr.status!=200) {
			options.faile('request error')
		}
	}
}
// // 在 vue 中全局注册 这样可以直接使用不使用 Vue.use() 方式
// Vue.prototype.ajax = ajax
export default {
  install(Vue,options){
    // 在 vue 中全局注册
    Vue.prototype.ajax = ajax
  }
}

// export default ajax
