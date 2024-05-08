{
// never > unknown > 

// nullable ty

const searchName = (value:string | null)=>{
    if(value){
        console.log('searching')
    } else{
        console.log('there is nothing search')
    }
}

 searchName('parishhh'); //if jabe
searchName(null) //else jbe



//unknown typeof

// const getSpeed = (value:unknown)=>{
//     if (typeof value === 'number') {
//         const convertedSpeed = (value * 1000) / 3600;
//         console.log(`the speed is : ${convertedSpeed} ms^-1`);
//     }
//     if (typeof value === 'string') {
//         const [result, unit] = value.split(" ");
//         const convertedSpeed = (parseFloat(result) * 1000) / 3600
//         console.log(`the speed is : ${convertedSpeed} ms^-1`)
//     }
// }

// getSpeed('1000 kmh^-1');


const getSpeed = (value:unknown)=>{
    if (typeof value === 'number') {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`the speed is : ${convertedSpeed} ms^-1`);
    }
   else if (typeof value === 'string') {
        const [result, unit] = value.split(" ");
        const convertedSpeed = (parseFloat(result) * 1000) / 3600
        console.log(`the speed is : ${convertedSpeed} ms^-1`)
    } else{
        console.log('wrong input')
    }
}

getSpeed(null);


//never

const throwError = (message: string): never=>{
    throw new Error(message)
}

throwError('muskhil se error hogaya')



    //
}