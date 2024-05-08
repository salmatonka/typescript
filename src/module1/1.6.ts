{
//

//learnig function
//normal function
//array function

function add(num1:number, num2:number) : Number {
    return num1 + num2 ;
}
const normalFun = add(2,2);
// console.log(normalFun)

//array function
const addArrow = (num1:number, num2:number) : number => num1 + num2 ;
const arrawFun = addArrow(2,5)
// console.log(arrawFun)



//object...> function....> method......dono't

const poorUser = {
    name: 'abul',
    balance: 0,
    addBalance(balance:number) : number {
      return this.balance + balance; //sudu balance ta new balance
    }
}
 
console.log(poorUser.balance)

const poorUser2 = {
    name: 'abul',
    balance: 0,
    addBalance(balance:number) : string {
    //   return this.balance + balance; //sudu balance ta new balance

    return `my new balance is : ${this.balance + balance}`;


    }
}
 
console.log(poorUser2)

//callback

const arr: number[] = [10,20,3,4]
const newArr  = arr.map((elem : number):number => elem * elem)
console.log(newArr)

    //
}