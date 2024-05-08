{
    //spread...choriye dibe  & rest operator...guchiye dibe
    //destruturing


// lear spread operator(...spread).........choriye dibe

const bros1 : string[] =['a','b','c','d','e','f'];
const bros2 : string[] =['1','2','3','4','6'];

const bros3 = bros1.push(...bros2)
// console.log(bros3)

//2
const mentors1 = { tys : 'mama', redux : 'mami'}
const mentors2 = { react : 'mama', js : 'mami', next: 'nani'}

const mentorList = {...mentors1,...mentors2}
// console.log(mentorList) //ak sthe kore dibe


//rest operator......guchiye dibe

const greatfriends = (...friends:string[])=>{  //akhne ...friends holu spread op
    friends.forEach((friends: string)=>
    console.log(`hi friens : ${friends}`)
    )
}

greatfriends('na','ha','ji','no')



// 6. Type Alias in TypeScript:.....
type Coordinates = {
  x: number;
  y: number;
};

let position: Coordinates = { x: 50, y: 100 };


    //
}