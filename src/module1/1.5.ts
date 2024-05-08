// {
//     //
//     // Gobal error solution
// ts-node-dev --respawn --transpile-only server.ts......command
//     //
// }


{
    // reference type .....>object
//1.
    const user: {
        firstName: string;
        middleName: string;
        lastName: string;
    } = {
        firstName: 'abul',
        middleName: 'kabul',
        lastName: 'jabul'
    }
    // console.log(user)
//2.
    const user1: {
        firstName: string;
        middleName?: string;  //?optional type...thakete o pare na o thakte pare
        lastName: string;
    } = {
        firstName: 'abul',
        // middleName: 'kabul',
        lastName: 'jabul'
    }


//3.
const user3: {
    firstName: string; //modify korte dibe.. string,number,boolean er value change kora jay.
    middleName?: string;  //?optional type...thakete o pare na o thakte pare.
    lastName: string;
    company: 'Programming Hero'; //literal type....akta value sob somy fixed rakhote hoy se value k ts diye dibu.
   readonly companName: string;  //modify korte dibena.change korte dibe na comN ,sara jibn aki thkbe
   year: number;
   isMarried: boolean;
} = {
    firstName: 'abul',
    // middleName: 'kabul',
    lastName: 'jabul',
    company:'Programming Hero',
    companName: 'baper hotal',
    year:2020,
    isMarried: true
}

const user4 = user3.isMarried= false;
console.log(user4)















    //
}










