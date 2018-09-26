

// function hehe(argument) {
// 	hehe() 
// }

// hehe()

function getMaxCallStackSize() {
	try {
      return 1 + getMaxCallStackSize();
    } catch (e) {
      return 1;
    }
}

var result = getMaxCallStackSize() 
console.log(result)

 

console.log('大家好！')

setTimeout(function() {
	
	console.log('TigerChain')

},2000)

console.log('欢迎关注')






