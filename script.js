let person = {
  firstName: "Suyog",
  lastName: "Shrestha",
};

// let name = person.firstName;

person.age = 21; // adding outside the object

// person.firstName = 'Samir';//modify


console.log(person.firstName);

//check properties in object
console.log("height" in person);

// methods in object

// using anonomyous function
person.sayHello = function () {
  console.log("Hello");
};

//normal function
function greet() {
  console.log("Hi");
}
person.sayHello = greet;

// inside object
let per = {
  firstName: "Suyog",
  lastName: "Shrestha",
  sayHello: function () {
    console.log("Shiva");
  },
};

// ES6 version
let pers = {
  firstName: "Suyog",
  lastName: "Shrestha",
  sayHello() {
    console.log("Samyog");
  },
};

person.sayHello();
per.sayHello();
pers.sayHello();

// this keyword
let name = {
  firstName: "Suyog",
  lastName: "Shrestha",
  sayHello() {
    console.log(
      "Hi! Iam " + this.firstName + " and Iam fan of " + hero.firstNa + " Khan"
    );
  },
};

let hero = {
  firstNa: "Shahrukh",
};

// math object
console.log(Math.PI);
console.log(Math.E);

let x = Math.pow(2, 3);
console.log(x);

//Random Number
let randomNumber = Math.random();
console.log(randomNumber);

// no from 0-9
let random_Number = Math.floor(Math.random() * 10);
console.log(random_Number);

// no from 1-10
let random_No = Math.floor(Math.random() * 10) + 1;
console.log(random_No);

// no from 10-20
function getRandom(min, max) {
  let random_Num = Math.floor(Math.random() * (max - min)) + min;
  return random_Num;
  let random_Numb = Math.floor(Math.random() * (max - min + 1)) + min;
  return random_Numb;
}
console.log(getRandom(10, 20)); //random_Num
console.log(getRandom(10, 20)); //random_Numb

// date object
let date = new Date();
console.log(date);

// parameters/arguments
let day = new Date(2018, 11, 13, 10, 23, 2, 9); //(year, month, date, hours, minutes, seconds, millsec)
console.log(day);

// string
let days = new Date("October 27, 2001 11:23:20");
console.log(days);

// methods
let xy = new Date("October 27, 2001 11:23:20");

console.log(xy.getTime());
console.log(xy.getFullYear());
console.log(xy.getMonth());
console.log(xy.getDate());
console.log(xy.getHours());
console.log(xy.getMinutes());
console.log(xy.getSeconds());
console.log(xy.getDay());

// set
let z = new Date("October 27, 2001 11:23:20");
// z.setFullYear(2023);
let m = new Date("October 27, 2001 11:23:20");
m.setDate(m.getDate() + 50); //after 50 days
console.log(z);
console.log(m);

// compare
let a = new Date();
let s = new Date();
if (s > a) {
  console.log("a is past date");
} else if (x > a) {
  console.log("a is future date");
} else {
  console.log("a is same date");
}


// new keyword
let people = new Object();

people.name = "Suyog Shrestha";
people.age = 21;

console.log(people.name);

//getter and setter function
let obj = {
  name: "Suyog Shrestha",
  age: 21,

  get getname(){
    return this.name.toUpperCase();
  },

  set setname(n){
    this.name = n.toUpperCase();
  }
};
obj.setname = 'suyog';

console.log(obj.getname);//getname is called as properties as being function
console.log(obj.setname);//setname is called as properties as being function

// object constructor => create multiple objects odf same properties
function Student(first, last, age){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

let student1 = new Student("Suyog", "Shrestha", 22)
let student2 = new Student("Samyog", "Shrestha", 16)
student1.nationality = "Nepali" //only added to student1 not in main function
console.log(student2);

// object prototype => methods & property can be added outside the function(Student)
Student.prototype.location = "Ganeshchowk";

// nested object

let user = {
  id: 101,
  email: "abc@gmail.com",
  personalInfo: {
    firstName: "Suyog",
    lastName: "Shrestha",
    DOB: {
      year: 2001,
      month: "October",
      date: 27,
      day: "Saturday"
    }
  }
};

console.log(user.personalInfo.DOB.year);

// hoisting
// hoisting is a technique to declare variables at the top of the function