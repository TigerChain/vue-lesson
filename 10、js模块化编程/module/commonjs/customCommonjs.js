// 定义一个 commonjs 的 js 

var name = 'TigerChain'
var age = 28
var address = 'china'

function getName() {
	console.log(name)
}
function getAge() {
	console.log(age)
}

// 把两个方法和一个属性暴露出去
module.exports = {
	myName:getName,
	myAge:getAge,
	address
}




