{
    //
    //union...> othoba > or > |

    type FrontEndDeveloper = 'joniorDeveloper' | 'fakibajiDeveloper'

    const developer: FrontEndDeveloper = 'joniorDeveloper';


    //
    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';  // | > union type > or
        bloodGroup: 'A+' | 'O+' | 'AB+'
    }


const user5 : User = {
    name: 'mrs',
    gender: 'male' ,
    bloodGroup: 'O+' 
}

console.log(user5)


 //intersection ty...> and  > &



type Developer1 = {
    skill : string[];
    designation1: 'frontED'
}

type Developer2 = {
    skill : string[];
    designation2: 'backED'
}

type FullStackDev = Developer1 & Developer2;

const fullStackDev : FullStackDev ={
    skill: ['HTML', 'CSS', 'js'],
    designation1: 'frontED',
    designation2: 'backED'
}




    //
}