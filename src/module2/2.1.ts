{
    // type assertion


 let anything : any ;
anything = 'hello next level';
// console.log(anything)
let anything1: number =(anything as string).length;

// console.log(typeof anything1)


// getNetPrice

let getNetPrice=(price: number, discount: number, format: boolean): number | string => {
    let netPrice = price * (1 + discount);
    return format ? `$${netPrice}` : netPrice;
}

let netPrice = getNetPrice(100, 0.05, true) as string;
// console.log(netPrice);


//  kgToGm

const kgToGm = (value:string | number | undefined) =>{
    if(typeof value === "string"){
        const convertedValue = parseFloat(value)* 1000;
        return `The converted value is : ${convertedValue}` 
    }
    if(typeof value === "number"){
        return value * 1000;
    }
    
}

const result1 = kgToGm(1000) as number;
const result2 = kgToGm("1000") as string;

console.log(result1)
console.log(result2)





// 
}