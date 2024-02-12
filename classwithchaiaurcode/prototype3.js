// let myName = "kanchan    "
// let mychannel = "chai"

// console.log(myName.trueLength);

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kanchan = function(){
    console.log(`kanchan is present in all object`);
}

Array.prototype.heyKanchan = function(){
    console.log(`kanchan says hello`);
}

// heroPower.kanchan()
// myHero.kanchan()

// myHero.heyKanchan()
// heroPower.kanchan()



//Todo: inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
}

anotherUsername.trueLength()
"kanchanlata".trueLength()
"iceTea".trueLength()


