const fetchServer = function(url,obj){

  obj = obj || {}
  obj.methods = obj.methods.toUpperCase() || 'GET'
  obj.async = obj.async || true
  obj.data = obj.data || {}

  const promise = new Promise(function(resolve,reject){
    var xhr = null
    if(window.XMLHttpRequest) {
  		xhr = new XMLHttpRequest()
  	}else {
  		xhr = new ActiveXObject("Microsoft.XMLHTTP")
  	}
    var params = []
  	// 拼接请求参数
  	for(var param in obj.data){
  		params.push(param +'='+obj.data[param])
  	}

  	var requestData = params.join('&')
  	// 请求类型
  	var requestType = obj.methods.toUpperCase()

  	if(requestType == 'GET'){
  		xhr.open(requestType,url+'?'+requestData,obj.async)
  		xhr.send(null)
  	}else if(requestType == 'POST'){
  		xhr.open(requestType,url,obj.async)
  		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=utf-8");
  		xhr.send(requestData)
  	}

  	xhr.onreadystatechange = function() {
      if(xhr.readyState == 4){
        if(xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText), this)
        }else {
          reject({code:250,message:"请求失败"}, this)
        }
      }
  	}
  })
  return promise
}

export default fetchServer
