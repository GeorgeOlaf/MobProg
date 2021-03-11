console.log("Hello world");

let hello = "Hello World";
hello = "Hello World !!!";


const birthYear = 2001;

let age = 31;
let isMarried = true;
let alamat;

console.log(hello);
console.log(birthYear);
console.log(age);
console.log(isMarried);
console.log(alamat);

let namaDepan = "George";
let namaBelakang = "Olaf";
let namaLengkap = namaDepan + " " + namaBelakang + ". Usia saya adalah" +" " + age;
console.log(namaLengkap);

console.log(10 == "10"); //loose equality
console.log(10 === "10"); // strict equality

let angka = 10;
const hasil = angka % 2 === 0 && true? "Genap" : "Ganjil";
console.log(hasil);

//function

//function ddeclaration
function ucapkanSalam(){
    console.log("Selamat Siang");
}
ucapkanSalam();

//function expression
const ucapkanSalam2 = function(){
    return("Selamat siang dari function expression");
};
console.log(ucapkanSalam2());
