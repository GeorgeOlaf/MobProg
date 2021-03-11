let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(value, index, array){
//     value *= 2;
//     console.log(value);
// });

let output = numbers.map(function (item) {
    return item *= 2;
});
console.log("Array numbers: ", numbers);
console.log("Array output: ", output);