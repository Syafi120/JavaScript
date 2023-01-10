let objek = {
    user : "Yuri.nime",
    telp : 29304148,

    sepatu : ["adidas", "nike", "gucci"],
    coba : function () {
        return "Coba Function Dalam Objek";
    },

    boleh : true,
    "Asal tulis aja" : 12345,   
};

console.log(objek.user);
console.log(objek.telp);
console.log(objek.boleh);
console.log(objek.coba());
console.log(objek.sepatu[1]);
console.log(objek["Asal tulis aja"]);