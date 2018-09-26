
var module = {
  exports: {}
};

// 定义一个立即执行的方法，里面定义了一个方法，然后外面就可以调用了
(function(module, exports) {
  exports.getName = function (name) {
   return name 
  };
}(module, module.exports))

 
var myFun = module.exports.getName;

console.log(myFun('TigerChain'))

