// let age;
const arrPerson = ["John", "Doe", 33, true, "Minahasa Utara"]
// const firstName = arrPerson[0];
// const lastName = arrPerson[1];
// const age = arrPerson[2];
// const isMarried = arrPerson[3];

// console.log(firstName, lastName, age, isMarried);
// let [, , age, isMarried, address = 'manado'] = arrPerson;
// console.log(age, isMarried, address );
// let [firstName, lastName, ...rest] = arrPerson;
// console.log(firstName, lastName)
// console.log(rest);

let firstName, lastname;
const objPerson = { 
    firstName: "john",
    lastName: "Doe",
    age: 33,
    isMarried: true,
    address: "Minahasa Utara",
};

// const {age } = objPerson;
// console.log(age);

// let {firstName, lastName, ...rest} = objPerson;
// console.log(firstName, lastName, rest);

const display = (props) => 
`Hallo nama saya ${props.firstName} ${props.lastName}`;
console.log(display(objPerson));