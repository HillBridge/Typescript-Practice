"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
// object对象类型
// interface接口
var greeter = function (person) {
    return "Hi,".concat(person.name, ", age: ").concat(person.age);
};
var liming = {
    name: "liming",
    age: 22
};
greeter(liming);
var user = {
    username: "admin",
    password: 2323
};
var p = new Point_1.Point(105, 26);
p.drawPoint();
p.X = 999;
console.log("edit", p.X);
p.Y = 888;
console.log('edit', p.Y);
