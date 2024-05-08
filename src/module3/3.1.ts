{
    // 
    // oop--class
    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound() {
            console.log(`the ${this.name} says ${this.sound}`)
        }

    }


    const dog = new Animal('genman', 'dog', 'ghew');

    dog.makeSound();


    //parameter property

    class Animal2 {
        // name: string;
        // species: string;
        // sound: string;.....

        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`the ${this.name} says ${this.sound}`)
        }

    }


    const cat = new Animal2('parsian', 'cat', 'meaw');

    cat.makeSound();

    // 
}