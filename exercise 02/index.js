//1 - a
function mandi(){
    console.log("Mandi");
}

//1 - b
function sarapan(){
    setTimeout(function (){
        console.log("sarapan tertunda 3 detik");
    }, 3000);
}

//1 - c
function berangkatsekolah(){
    console.log("Berangkat sekolah");
}

//1 - d
mandi();
sarapan();
berangkatsekolah();

//1- e
function sarapan(callback){
    setTimeout(function (){
        console.log("sarapan tertunda 3 detik");
        callback();
    }, 3000);
}
//1 - f
mandi();
sarapan(berangkatsekolah);

// 2 - a
let helloWorld = () =>{
    return new Promise ((callback) => {
       setTimeout(function callback(resolve) {
        resolve ("Hello World");  
       }, 2000); 
    }
    )
};

helloWorld();

// 2 - b, c
const massage = async() => {
    let helloWorld = () => "Hello World";
    msg = await helloWorld();
    console.log(msg);
};

massage();

// 3 - a,b,c
const ambilDataUser = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then(function(users){
        console.log(users);
    });
}

ambilDataUser();