function addDiv() {
	var bodyDiv = document.getElementById('mydiv')
	var input = document.createElement("input");
	bodyDiv.appendChild(input);
	var mydiv = document.createElement('div')
	bodyDiv.appendChild(mydiv)
	console.log(1)
}

addDiv() ;

console.log(2)

/**
 * @Description: 动态添加 js 异步执行
 * @Author:      TigerChain 
 */
function dynamicAddScipt(url) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	// script.text="alert('test')"  // 内联创建，不会同步
	script.src = url;
	// document.body.appendChild(script);
	document.head.appendChild(script);
	console.log(document)
}

dynamicAddScipt('../test.js')

console.log(4)





