// //callback
// function salam(namaLengkap){
//     console.log (`Hi ${namaLengkap}`)
// }

// asynchcronous
// console.log("satu");
// setTimeout(() =>{
//     console.log("dua"); 
// }, 2000)
// console.log("tiga");

// 
// setTimeout(()=>{
//     console.log("proses 1");
//     setTimeout(()=>{
//         console.log("proses 2");
//         setTimeout(()=>{
//             console.log("proses 3");
//         }, 2000);
//     }, 2000);
// }, 2000);
// let condition = true; 
// let newPromise = new Promise((resolve, reject)=>{
// if (condition){
//     resolve("tes 1");
// }else{
//     reject("error");
// }
// });

// newPromise.then((result)=>{
//     console.log(result);
// })

function getIdstudent(){
    return new Promise ((resolve, reject)=>{
        resolve("1235");
    });
}
function getNameByid(id){
    return new Promise ((resolve, reject)=>{
        if (id === "12345"){
            resolve("geroge olaf");
        } else {
            reject("unknown id student");
        }
    });
}

// getIdstudent().then(id=>{
//     return getNameByid(id);
// }).then(name=>{
//     console.log(name);
// })
// .catch((eror)=>{
//     console.log(Error)
// });

const getNameByidAsync = async () =>{
    const id = await getIdstudent();
    const name = await getNameByid(id);
    console.log(name);
};
getNameByidAsync();