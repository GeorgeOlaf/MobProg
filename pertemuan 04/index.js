//array

// let numbers = [1, 2, 3, 4, 5];

// let john = ['john', 'Doe', 33, true];

// let numbers = new Array (1, 2, 3, 4, 5 );
// let john = new Array("john", "Doe", 33, true);
// john[3] = false;


// console.log(numbers [numbers.length - 1]);
// console.log(john[john.length - 1]);

//object

const john = {
    fisrName: "John",
    lastName: "Doe",
    age: 33,
    isMarried: true,
    sayHello : function (){
        console.log("Hello");
    },
};

// const john = new Object();
// john.firstName = "John";
// john.lastName = "Doe"
// john.age = 33;
// john.isMarried = true

console.log(john.lastName);

john.address= "Manado";
john["nationality"] = "Indonesia";
console.log(john);
john.sayHello;