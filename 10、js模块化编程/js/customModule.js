// 字面量对象模块化
var customModule = {
	name:'TigerChain',
	age:'28',
	getName:function() {
		return this.name ;
	},
	getAge:function() {
		return this.age ;
	}

}

//字面量对象模块化2
var customModule2 = {}

customModule2.getTime = function() {
	return "现在的时间是："+new Date()
}

// 定义一个直接运行的函数
var runMdule = (function(){
	var name = 'TigerChain1'
	var age = 28 

	function getMyName() {
		return name 
	}

	function getMyAge() {
		return age
	}

	return {
		// 把 getMyName 和 getMyAte 方法暴露出去
		getMyName:getMyName,
		getMyAge:getMyAge
	}
})() ;


// 定义全局变量，把方法或属性挂载到 window 全局对象上
window.module = {}

const windowModule = window.module ;

var getName = function() {
	return 'TigerChain-window'
}

const age = 28 

windowModule.age = age 

windowModule.getName = getName()




function hello(msg) {
	return msg + ' TigerChain'
}

function outputResult(msg) {
	var result = hello(msg)
	console.log(result)
}

outputResult('Hello')






