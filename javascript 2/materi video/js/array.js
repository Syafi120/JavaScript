let coba = function (){
    return "Tahap Pembelajaran";
}

let sepatu = ["nike", "adidas", "gucci",100, coba()
    , (tes = () => "Hasil Output Return Arrow function")
    , function nama() {
        return "Yuri.Nime";
    }
];

console.log(sepatu);
console.log(sepatu[1]);

for (let i in sepatu){
    console.log(sepatu[i]);
}

console.log(sepatu[5]());
console.log(sepatu[6]());