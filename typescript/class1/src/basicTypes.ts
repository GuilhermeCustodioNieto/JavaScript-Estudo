
// Basic Types of TypeScript
let company :string = 'My Startup'
let isPublished :boolean = true
let anuValue :any = 'Hello'
let age: number
age = 15

// Arays
let ids: number[] = [1,2,3,4,5]

ids.push(6)

let arr :any[] = [1, true, 'hello']

// Tuple
let person :[number, string, boolean] = [1, 'brad', true]

// Tuple array
let employee : [number, string][] 
employee = [
    [1, 'brad'],
    [2, 'Guilherme']
]

// Union
let pid: string | number 

pid = '22'

// Enum
enum Direction1 {
    Up = 1,     
    Down,
    Left, 
    Right
}

console.log(Direction1.Up);

enum Direction2 {
    Up = 'Up',     
    Down = 'Down',
    Left = 'Left', 
    Right = 'Right'
}

// Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1, 
    name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum (x :number, y :number) :number{
    return x + y;
}

console.log(addNum(1, 2));

function log(message: string | number) :void{
    console.log(message)
}

log(`Hello`)

// Interfaces
interface UserInterface {
    id: number,
    name: string
}
const user1: UserInterface = {
    id: 1, 
    name: 'John'
}

// 