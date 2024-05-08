{
    //
// generic interface

interface Developer<T, x=null> {
    name: string,
    computer: {
        brand: string,
        model: string,
        relaseyear: number
    };
    smartWatch: T;
    bike?: x;
}


const poorDeveloper1: Developer<{
    brand: string,
    model: string,
    display: string
}> = {
    name: 'Abul',
    computer: {
        brand: 'Asus',
        model: '255er',
        relaseyear: 2013
    },
    smartWatch: {
        brand: 'A',
        model: '2er',
        display: 'oled'
    }
}

console.log(poorDeveloper1)


// typedeclare 

type EmailWatch = {
    brand: string,
    model: string,
    display: string
}

const poorDeveloper2: Developer<EmailWatch > = {
    name: 'Abul',
    computer: {
        brand: 'Asus',
        model: '255er',
        relaseyear: 2013
    },
    smartWatch: {
        brand: 'A',
        model: '2er',
        display: 'oled'
    }
}

console.log(poorDeveloper2)

// interface declare 

interface AppleWatch {
    brand: string,
    model: string,
    display: string
}

const poorDeveloper3: Developer<AppleWatch> = {
    name: 'Abul',
    computer: {
        brand: 'Asus',
        model: '255er',
        relaseyear: 2013
    },
    smartWatch: {
        brand: 'A',
        model: '2er',
        display: 'oled'
    }
}

console.log(poorDeveloper2)


// or

const richDeveloper: Developer<{
    brand: string,
    model: string,
    time: number,
    heartTrack: boolean,
    sleepTrack: boolean
}> = {
    name: 'kbul',
    computer: {
        brand: 'hr',
        model: 'hr22',
        relaseyear: 2014
    },
    smartWatch: {
        brand: 'Apple',
        model: '4ap',
        time: 20,
        heartTrack: true,
        sleepTrack: false
    }
}
console.log(richDeveloper)
    //
}