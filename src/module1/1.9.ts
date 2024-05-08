{
    //
 //type aliash

 type Student ={  //Student > aliash 
    name: string;
    age: number;
    gender: string;
    conNum? : string;
    address: string;
 }

 const student1 : Student= {  //student1 > value. r Student holu aliash. property gulur short name
    name: 'rafi',
    age: 20,
    gender: 'male',
    address: 'dhaka'
 }


 const student2 : Student = {
    name: 'safi',
    age: 10,
    gender: 'male',
    conNum : '01300000000',
    address: 'dhaka'
 }


///
type Add = (num1:number, num2:number) => number;

const add: Add = (num1,num2) => num1 + num2;  //Add > alish ..

 const add1 = add(2,3);
console.log(add1)







    //
}