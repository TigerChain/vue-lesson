// 引入 customCommonjs.js
console.log('执行开始')
var myCommonjs = require('./customCommonjs.js')
// 调用其对应的方法
myCommonjs.myName()
myCommonjs.myAge() 
console.log(myCommonjs.address)

console.log('执行结束')

