{
    //

    //polmorphisom

    class Person {
        getSleep() {
            console.log(`i am sleeping for 8 hours per day`)
        }
    }

    class Studen extends Person {
        getSleep() {
            console.log(`i am sleeping for 7 hours per day`)
        }
    }
    class Deloper extends Person {
        getSleep() {
            console.log(`i am sleeping for 6 hours per day`)
        }
    }

    const getSleepHours = (param: Person) => {
        param.getSleep()
    }
    const person1 = new Person();
    const person2 = new Studen();
    const person3 = new Deloper();

    getSleepHours(person3)
    getSleepHours(person2)
    getSleepHours(person1)


    //.................


    class Sharp {
        getArea(): number {
            return 0
        }
    }

    class Circel extends Sharp {
        redius : number;
        constructor(reduis: number){
            super()
            this.redius = reduis;
        }
        getArea(): number {
            return Math.PI * this.redius;  //pi* r* r
        } 
    }


    class Rectangle extends Sharp {
        height:number;
        weight: number;
        constructor(height:number,weight: number){
            super()
            this.height = height;
            this.weight = weight;
        }
        getArea(): number {
            return this.height * this.weight;
        } 
    }

    const getShareArea = (param: Sharp) => {
        (console.log(param.getArea()))
    }

    const sharp1 = new Sharp();
    const sharp2 = new Circel(10);
    const sharp3 = new Rectangle(20,30);


getShareArea(sharp3)
getShareArea(sharp2)
getShareArea(sharp1)


    //
}