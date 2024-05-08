{
    // type  

    type User1 = {
        name : string,
        age: number
    } 
    type UserwithRole1 = User1 & {role: string}
    const typeUser1: UserwithRole1 ={
        name : "abul",
        age: 10,
        role: "manager1"
    }
    console.log(typeUser1)

// interface

interface User2 {
    name :string,
    age: number,
}
interface UserwithRole2 extends User2 {
    role : string
}

const interfaceUser: UserwithRole2 ={
    name : "jabul",
    age: 20,
    role: "manager2"
}
console.log(interfaceUser)

// type k interface kora jay ar interface k type o kora jay

type User3 = {
    name : string,
    age: number
} 

interface User4 {
    name :string,
    age: number,
}
interface UserwithRole3 extends User3 {
    role : string
}

const typeInterface: UserwithRole3 ={
    name : "kabul",
    age: 30,
    role: "manager3"
}
console.log(typeInterface)

/////////////

// Array type
type RoolType = number[];

const roolTypeNumber : RoolType = [1,2,3];

console.log(roolTypeNumber)



 ////Array interface

 interface RoolInterface {
    [index : number] : number
 }
const roolInterfaceNumber : RoolInterface = [5,6,4]
console.log(roolInterfaceNumber)


// function type

type Add1 = (num1:number, num2:number) => number
const add1: Add1=(num1,num2)=> num1+num2

console.log(add1)




    // 
}