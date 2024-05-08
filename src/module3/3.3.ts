{
    // 
//typeof ----guard

type Alphancumeric = string | number ;

const add = (params1: Alphancumeric, params2: Alphancumeric ) : Alphancumeric =>{
    if(typeof params1 === 'number' && typeof params2 === 'number'){
      return params1 + params2 ;
    }
    else{
      return  params1.toString() + params2.toString ()   
    }
}

//number+ number= number
const result1 = add(2,3);
console.log(result1)
//string+ string =string
const result2 = add('5','3');
console.log(result2)

//string+ number= concet(string)
const result3 = add('5',8);
console.log(result3)


//in----guard

type NormalUser = {name: string}

type AdminUser = {name: string; role: 'admin'}

const getUser =(user: NormalUser | AdminUser) =>{
    if('role' in user){
        console.log(`i am admin ${user.name} and my role is ${user.role}`)
    }
    else{
        console.log(`i am normal user: ${user.name}`)
    }
}

const normalUser : NormalUser = {name: 'abul'};
const adminlUser : AdminUser = {name: 'kabul', role: 'admin'};

// getUser(normalUser)
getUser(adminlUser)

    // 
}