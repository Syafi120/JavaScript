function coba() {
    let belajar = "saya belajar javascript";
    console.log(belajar);
    console.log("javascript itu mirip c++");
}

// for (let i = 0; i < 10; i++) {
//     coba();
//     console.log("====================");
// }

function persegi(lebar, panjang) {
    luas = panjang * lebar
    console.log(luas);
}
persegi(3,18);
//================================================

function out() {
    return console.log("output function");
}
out();

function lingkaran(r) {
    luas = 3.14 * r * r;
    return luas;
}
console.log(lingkaran(100) * 12);

const tinggi = 5;
let tabung = lingkaran(100) * tinggi;

function lewat(a) {
    return a;
}

//console.log(tabung);
console.log(lewat(10));