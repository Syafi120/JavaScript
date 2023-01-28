let fungsi  = function(nama) {
    console.log("kata" +" "+ nama +" "+"javascript itu sama dengan c++");
};

fungsi("Pak tri");

let contoh = (nama)=>{
    console.log(nama + " " + "Sedang Mengejar materi")
}

contoh("teman sebelah saya");

let tambah = function (a , b) {
    return a + b;
};

console.log(tambah (12,10));

let plus = (a, b) => a + b;
console.log(plus(2,4));

let hasil = a => a * 2;
console.log(hasil(4))

let lagi =() =>console.log("gatau mau apa");
lagi();

let belajar = () => {
    console.log("ga boleh");
    console.log("yaudah boleh");
    console.log("gatau");
    console.log("yaudah iyaa");
}
belajar();

let nilai  = 7;
let uji = nilai < 8 ? ()=> console.log("tidak lulus") : () => console.log("lulus");
console.log(uji());