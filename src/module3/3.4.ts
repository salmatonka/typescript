{
    // 
// guard using instanceof

class Animal {
    name : string;
    species: string;

    constructor(name : string,species: string){
        this.name = name;
        this.species = species;
    }

    makeSound(){
        console.log('i am making sound')
    }
}

class Dog extends Animal {
    constructor(name : string,species: string){
        super(name,species)
    }

    makeBark(){
        console.log('i am barking')
    }
}

class Cat extends Animal {
    constructor(name : string,species: string){
        super(name,species)
    }

    makeMeaw(){
        console.log('i am meawing')
    }
}

//......instanceosf
// const getAnimal = (animal:Animal) =>{
//     if(animal instanceof Dog){
//         animal.makeBark();
//     } 
//     else if (animal instanceof Cat){
//         animal.makeMeaw();
//     }
//     else{
//         animal.makeSound
//     }

// }


//or.....instanceosf er smart way te handle korar jon nije function create

const isDog = (animal:Animal): animal is Dog =>{
    return animal instanceof Dog
}
const isCat = (animal:Animal): animal is Cat =>{
    return animal instanceof Cat
}

// smart way last
const getAnimal = (animal:Animal) =>{
    if(isDog(animal)){
        animal.makeBark();
    } 
    else if (isCat(animal)){
        animal.makeMeaw();
    }
    else{
        animal.makeSound
    }

}

const dog = new Dog ('dog vai','dog');
const cat = new Cat ('cat vai','cat');
 
getAnimal(cat)



    // 
}