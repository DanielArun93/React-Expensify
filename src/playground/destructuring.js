//object destructuring
const person = {
    name:"aaa",
    age:25,
    location:{
        city:'chennai',
        temp:34
    }
}

//old obj method access
// console.log(`${person.name} is ${person.age} years old..`);
// console.log(`${person.name} lives in  ${person.location.city}.Current Temperature is ${person.location.temp}`);


//es6 methods
const { name:username = 'Anonymous'} = person;
const { city,temp:temperature } = person.location;

console.log(`${username} is ${age} years old..`);
console.log(`${username} lives in  ${city}.Current Temperature is ${temperature}`);

//Array destructuring
// const address = ['No.28/12E Razak lay out',,'Chennai','600119'];

// const [,state = 'New York',city,pincode] = address;
// console.log(`I am living in ${city},${state}`);
//console.log(`I am living in ${address[2]},${address[1]}`);


