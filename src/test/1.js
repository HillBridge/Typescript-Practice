// number
var number1 = 33;
// boolean
var flag = true;
// string
var str = 'hello';
// console.log(number1)
// array
var list1 = [1, 2, 3, 4];
var list2 = [0, 5, 6, 7, 8]; // 泛型
var list3 = [];
var list4 = [1, '2'];
var list5 = [1, 2, true, ''];
// tupple元祖(固定长度，固定类型，是特殊的数组)
var per1 = [1, '34'];
// 联合数组(支持一个或多种类型)
var per2 = [1, '2', true];
var union;
union = 2;
union = 'hello';
function merge(n1, n2, type) {
    if (type === 'as-string') {
        return n1.toString() + n2.toString();
    }
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    else {
        return n1 + n2;
    }
}
var merge1 = merge(2, 5, 'as-string');
var merge2 = merge('hello', 'world', 'as-string');
console.log(merge1, merge2);
// 字面量类型
var union3;
union3 = 3;
