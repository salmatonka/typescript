{
//

// 1. Destructuring in TypeScript: 
let point = { g: 10, h: 20 };
let { g, h } = point; //point theke g h ke distructuring 
console.log(g, h); // Output: 10 20


//destructuring...obj dis

const user = {
    id: 222,
     name:{
        firstName: 'abul',
        middleName: 'kabul',
        lastName: 'jabul',
    },
    contNmbr : '01300000000',
    address : 'uganda'
}

const {id, name:{middleName : mr},contNmbr} = user;  //name don't
// console.log(name)


//destructuring...arr dis
const myFriends = [ 'abul', 'kabul', 'jabul', 'cabul', 'labul','pabul','mabul'];

// const [a,b, bestFriend, ...rest] = myFriends;   
const [,, bestFriend, ...rest] = myFriends; //,,> abul r kabul k ber korte dibe 
                                            
// console.log(a,b)           // a > abul r b > kabul k ber korte dibe
console.log(bestFriend)   //bestFr > jabul k ber korte dibe
console.log(...rest)      //...rest operator > baki gulu k ber korte dibe












//

}