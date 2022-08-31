import { Point } from './Point'
// object对象类型
// interface接口
const greeter = (person: Person) => {
  return `Hi,${person.name}, age: ${person.age}`
}

interface Person {
  name: string;
  age: number
}

const liming = {
  name: "liming",
  age: 22
}

greeter(liming)

interface User {
  username: string;
  password: number
}

const user: User = {
  username: "admin",
  password: 2323
}



const p = new Point(105,26)
p.drawPoint()
p.X = 999
console.log("edit",p.X)
p.Y = 888
console.log('edit', p.Y)