//class
//a,b,c,d,e
class orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    bekerja(){
        console.log(` ${this.nama}sedang bekerja sepeti biasa`);
    }
}
const user1 = new orang("George", "19");
user1.bekerja();

//inheritance
//a,b,c,d,e,f,g,h,i,j
class orangg extends orang{
    constructor(nama, umur){
    this.nama = nama;
    this.umur = umur;
}
tidur(){
    console.log(` ${this.nama}sedang tidur`);
}
makan(){
    console.log(` ${this.nama}sedang makan`);
}
}
class pelajar extends orangg {
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah = namaSekolah;
    }
    namaSekolah(){
        console.log(` ${this.nama}sedang bekerja sepeti biasa`);
    }
    belajar(){
        console.log(` ${this.nama} belajar di ${this.namaSekolah}`);
    }
}
const user = new orangg("john", "17", "unklab");
user.belajar();



