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

interface IPoint {
  drawPoint: () => void
  getInstance: (IPoint) => number
  X: number
  Y: number
  // getX: () => number
  // setX: (value) => void
  // getY: () => number
  // setY: (value) => void
}

class Point implements IPoint {
  // private
  // protected
  private x: number
  private y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  drawPoint = () => {
    console.log('x:', this.x, 'y:', this.y)
  }
  getInstance = (p: IPoint) => {
    return Math.pow(p.X - this.x, 2) + Math.pow(p.Y - this.y, 2)
  }
  get X (){
    return this.x
  }
  set X (value: number){
    if (value < 0) {
      throw new Error('x 不能小于0')
    }
    this.x = value
  }
  get Y () {
    return this.y
  }
  set Y (value: number){
    if (value < 0) {
      throw new Error('y 不能小于0')
    }
    this.y = value
  }
}

const p = new Point(105,26)
p.drawPoint()
p.X = 999
console.log("edit",p.X)
p.Y = 888
console.log('edit', p.Y)