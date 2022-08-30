// 基本数据类型，number, string, boolean, 数组，元祖，联合类型，字面量类型

// number
let number1: number = 33
// boolean
let flag: boolean = true
// string
let str: string = 'hello'

// console.log(number1)

// array
let list1: number[] = [1, 2, 3, 4]
let list2: Array<number> = [0, 5, 6, 7, 8] // 泛型
let list3 = []

let list4 = [1, '2']
let list5: any[] = [1, 2, true, '']

// tupple元祖(固定长度，固定类型，是特殊的数组)

let per1: [number, string] = [1, '34']

// 联合数组(支持一个或多种类型)
let per2 = [1, '2', true]

let union: string | number | boolean | number[] | string[] | boolean[]
union = 2
union = 'hello'

function merge(n1: number | string, n2: number | string, type: "as-number" | "as-string") {
  if (type === 'as-string'){
    return n1.toString() + n2.toString()
  }
  if (typeof n1 === 'string' || typeof n2 === 'string') {
    return n1.toString() + n2.toString()
  } else {
    return n1 + n2
  }
}

let merge1 = merge(2, 5, 'as-string')
let merge2 = merge('hello', 'world', 'as-string')

console.log(merge1,merge2)

// 字面量类型
let union3: 0 | 1 | 2 | 3
union3 = 3
