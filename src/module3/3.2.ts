{
    // 
    // inheritance--oop
    // Person holu Parent
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number,address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours:number) {
            console.log(` ${this.name} will sleep for ${numOfHours}`)
        }

    }


    class Student extends Person {
        constructor(name: string, age: number,address: string) {
            super(name,age,address)
        }
    }

    const student = new Student('Abuk', 20, 'uganda');
    student.getSleep(10)
    console.log(student.name)



////////.....

class Teacher extends Person {
    designation: string

    constructor( name: string, age: number, address: string, designation:string ) {
        super( name, age, address )
        this.designation = designation;
    }

    TakeClass(numOfClass:number) {
        console.log(` ${this.name} take class for ${numOfClass}`)
    }
}

const teacher = new Teacher('Abid', 40, 'uganda','professor');
teacher.TakeClass(34)
console.log(teacher.name)


    

    // 
}