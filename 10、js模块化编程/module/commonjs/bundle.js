(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
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
            myName: getName,
            myAge: getAge,
            address
        }
    }, {}],
    2: [function(require, module, exports) {
        // 引入 customCommonjs.js
        console.log('执行开始')
        var myCommonjs = require('./customCommonjs.js')
        // 调用其对应的方法
        myCommonjs.myName()
        myCommonjs.myAge()
        console.log(myCommonjs.address)
        console.log('执行结束')
    }, {
        "./customCommonjs.js": 1
    }]
}, {}, [2]);