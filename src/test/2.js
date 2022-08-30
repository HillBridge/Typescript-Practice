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
console.log(printRes());
