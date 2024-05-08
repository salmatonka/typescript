{
// ternary operator || optional chainig || nullish coalescing

const age : number = 15;
if(age >= 18){
    console.log('adult');
} else {
    console.log('not adult');
}

const isAdult = age >=18 ? 'adult' : 'not adult'
console.log({isAdult})
console.log(isAdult)


//nullish coalescing operator

const isAuthCll = null ;

const res = isAuthCll ?? 'guest'

console.log({res})

///

type User = {
    name : string;
    address : {
        cty: string;
        road : string;
        parAdd?: string;
        presAdd: string
    }
}

const user : User = {
    name : 'abu',
    address : {
        cty: 'ctg',
        road : 'awesome',
        presAdd: 'towng'
    }
}

const parUserAdd = user?.address?.parAdd ?? 'no parAd';
console.log({parUserAdd})





    //
}