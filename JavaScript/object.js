// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const melon = {name:'melon', age: 4 };
print(melon);

// with JavaScript magic (Dynamically typed language)
// can add properties later
melon.hasJob = true;
console.log(melon.hasJob);

// can delete properties later
delete melon.hasJob;

// 2. Computed properties
// key should be always string
console.log(melon.name)
console.log(melon['name']);
melon['hasJob'] = true;
console.log(melon.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(melon, 'name');
printValue(melon, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('melon', 26);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in melon);
console.log('age' in melon);
console.log('random' in melon);
console.log(melon.random);