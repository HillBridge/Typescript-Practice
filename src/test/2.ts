// 枚举类型
enum Color {
  red,
  blue = "blue",
  green = "h"
}
console.log(Color.red)
console.log(Color.blue)
console.log(Color.green)


// any 和 unknown
let qiao: unknown = 23
qiao = "str"
qiao = true
qiao = [1,2,3]

if(typeof qiao === "function"){
  qiao()
}

// 针对函数而言
// void(不存在) 、 undefined（未定义） 、never
function printRes(): void {
  console.log('llllaaa')
}

// console.log(printRes())

// 类型适配（类型断言）
let message: any = "abc"
let d1 = (<string>message).endsWith("c")
let d2 = (message as string).endsWith('c')


// 函数类型
const log = function(message){
  console.log(message)
}

const log2 = (message: any) => {
  console.log(message)
}

log2(true)
log2("hello")

const log3 = (message: string, code: number = 23) => {
  console.log(message, code)
}

log3("hh")

log3('hh', 44)