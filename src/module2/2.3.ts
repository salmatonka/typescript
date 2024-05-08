{
    // type generics............
// 1.number
    const rollNumber : number[] = [1,2,3];
    // console.log(rollNumber)
    //or Type Of Array declare
    const rollNumber1: Array<number> = [1,2,3];
    // console.log(rollNumber1)
    

    // 2.string
    const stringNumber : string[] = ["a","b","c"];
    //0r Type Of Array declare
    const stringNumber1: Array<string> = ["a","b","c"];
    //  console.log(stringNumber1)

     // 3.boolean
    const booleanNumber : boolean[] = [true,false,true];
    //or Type Of Array declare
    const booleanNumber1: Array<boolean> = [true,false,true];
    //  console.log(booleanNumber1)


///////////.........
// 1.GenericsNumber
type GenericsNumber = Array<number>
const rollNumberGen : GenericsNumber = [5,6,7]
// console.log(rollNumberGen)

// 2.GenericsString
type GenericsString = Array <string>
const rollStringGen : GenericsString = ["abul","babul","cabul"]
// console.log(rollStringGen)

// 3.GenericsBoolean
type GenericsBoolean = Array <boolean>
const rollBooleanGen : GenericsBoolean = [true,false,true]
// console.log(rollBooleanGen)


// Dynamics function: don't understood

type GenericsWithDynamicsArray<T> = Array <T> 
const rollWithDynamicsArray : GenericsWithDynamicsArray<number> = [10,20];



const dynAdd = (x:number, y:number) => x+y;
dynAdd(20,40)



// or type

type User = {
    name: string,
    age: number
}

const user1 :GenericsWithDynamicsArray <User> = [
    {
        name: 'abir',
        age: 100
    },
    {
        name: 'rabir',
        age: 110
    }
]

// or interface
interface User1 {
    name: string,
    age: number
}

const user2 :GenericsWithDynamicsArray <User1> = [
    {
        name: 'abir',
        age: 100
    },
    {
        name: 'rabir',
        age: 110
    }
]


// Arrayof object
const user : GenericsWithDynamicsArray <{name:string,age:number}> = [
    {
        name: 'abir',
        age: 100
    },
    {
        name: 'rabir',
        age: 110
    }
]

console.log(user.length)


// generic tuple

type GenericsTuple <x,y> = [x,y]
const manush : GenericsTuple <string,string> = ['amon','jamon']
console.log(manush)

// or

const UserWithId :GenericsTuple <number,{name:string,email:string}> = [
    1234,
    {
        name: 'abid',
        email: 'a@gmail.com'
    }
]




// ts-node-dev --respawn --transpile-only




    // 

}