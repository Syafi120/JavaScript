// OR
// Akan bernilai true jika salah satu ada yang bernilai true
let a = true;
let b = false;
let c = true;
let d = false;
console.log(d || b || a);

// AND
// Akan bernilai false jika ada salah satu yang bernilai false
console.log(a && b && c);

//  Operator Pembanding
// --------------------//
//   CONTOH PERTAMA
//----------------------//
// Lebih Besar
let x = 10;
let y = 7;
console.log(x > y);

// Lebih Kecil
console.log(x < y);

// Persamaan
console.log(x == y);

// Lebih Besar Sama Dengan
console.log(x >= y);

// Lebih Kecil Sama Dengan
console.log(x <= y);


//         Identik
//    Sama Tipe Dan Isi
//------------------------.//
//         CONTOH
//-------------------------//

let lima = "5";
let five = 5;
console.log(lima == five);
console.log(lima === five);