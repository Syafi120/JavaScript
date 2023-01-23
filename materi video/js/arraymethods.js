// Array berupa isi
// string, number, objek, function, atau campuran

let nilai = [
    {nama : "Asep", Jurusan: 80, Mtk: 77, Bahasa: 75},
    {nama : "Agus", Jurusan: 89, Mtk: 80, Bahasa: 90},
    {nama : "Bagus", Jurusan: 75, Mtk: 90, Bahasa: 85},
    {nama : "Yanto", Jurusan: 89, Mtk: 60, Bahasa: 95},
    {nama : "Riski", Jurusan: 90, Mtk: 70, Bahasa: 87}
]

let nama = ["Asep","Agus","Bagus","Yanto","Riski"];
// nama.push("Yanti", "Michele");

// console.log(nama.shift());

// nama.unshift("John","Kenzi");

// console.log(nama.slice(2, 8));

let mapel = [
    "Jurusan",
    "Mtk",
    "Bahasa"
];
// console.log(nama.concat(mapel));
// console.log(nama.concat(["Sejarah","PAI","PKN"]));

//console.log(nama.splice(5, 2));

// console.log(nama.pop());

//console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
    
// }

// nama.forEach(function (a) {
//     console.log(a);
// })

// nama.forEach((a) => console.log(a));

// nilai.filter(function (a) {
//     if (a.Jurusan > 70) {
//         console.log(a.nama);
//     }
// });

// console.log(nilai);

// nilai.filter((a) => (a.Jurusan > 70 && a.Mtk > 80 ? console.log(a.nama) : null));

// let siswa = nilai.map(function (a) {
//     return a.nama;
// });

// let siswa = nilai.map((a) => [a.nama , a.Jurusan, a.Bahasa]);

// console.log(siswa);

// mapel.sort();
// console.log(mapel);

// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.Mtk); 
// }, 0);

let hasil = nilai.reduce((a, b) => (a = a + b.Bahasa), 0);

console.log(hasil);