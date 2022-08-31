// 泛型
const lastInArray = <T>(arr: Array<T>) => {
  return arr[arr.length-1]
}

const l1 = lastInArray([1,2,3,4])
const l2 = lastInArray(['1', '2'])
const l3 = lastInArray<string | number>(['1', '2'])


const makeTuple = <X,T=number>(x:X, y: T) => [x, y]

makeTuple(1,2)
makeTuple("2", 2)
makeTuple(true, "2")