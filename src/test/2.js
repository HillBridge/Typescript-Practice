// 枚举类型
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color["blue"] = "blue";
    Color["green"] = "h";
})(Color || (Color = {}));
console.log(Color.red);
console.log(Color.blue);
console.log(Color.green);
// any 和 unknown
var qiao = 23;
qiao = "str";
qiao = true;
qiao = [1, 2, 3];
if (typeof qiao === "function") {
    qiao();
}
// 针对函数而言
// void(不存在) 、 undefined（未定义） 、never
function printRes() {
    console.log('llllaaa');
}
// console.log(printRes())
// 类型适配（类型断言）
var message = "abc";
var d1 = message.endsWith("c");
var d2 = message.endsWith('c');
// 函数类型
var log = function (message) {
    console.log(message);
};
var log2 = function (message) {
    console.log(message);
};
log2(true);
log2("hello");
var log3 = function (message, code) {
    if (code === void 0) { code = 23; }
    console.log(message, code);
};
log3("hh");
log3('hh', 44);
