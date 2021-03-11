//Nama: George Olaf
//Array

let people = ["Greg", "Mary", "Devon", "James"];

//1
for (let i = 1; i < 2; i++) {
    console.log(people);
  }
  
//2
people.forEach(function (data) {
    console.log(data)
  });

//3
people.shift();
console.log(people);

//4
people.pop();
console.log(people);

//5
people.unshift("Matt");
console.log(people);

//6
people.push("George");
console.log(people);

//7
let i;
for (i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (i="Mary") {
        break;
    } 
}

//8
let copy = people.slice(2);
console.log(copy);

//9
let people1 = ["Greg", "Mary", "Devon", "James"];

people1.splice(2, 1, "Elizabeth", "Artie");
console.log(people1);

//10
let withBob = ["Bob"];

let newPeople = people1.concat(withBob);
console.log(newPeople);

//Object 

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1
programming.languages.push ("Go");
console.log(programming.languages);

//2
programming.difficulty = 7;
console.log(programming.difficulty);

//3
delete programming.jokes;
console.log(programming.jokes);

//4
programming.isFun = true;
console.log(programming.isFun);

//5
let newLanguages = programming.languages.map(function (value, index) 
{
  
  console.log('index : '+ index + ', value: ' + value);
});
console.log(newLanguages);
console.log(programming.languages);