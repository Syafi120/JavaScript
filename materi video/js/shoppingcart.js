let tblmenu = [
    {
        idmenu : 12,
        idkategori: 28, 
        menu: "baju jepang",
        gambar: "bajujpng.jpg",
        harga: 60000
    },

    {
        idmenu : 8, 
        idkategori: 29, 
        menu: "Baju terkini", 
        gambar: "7ff642aa-c54c-4f65-890a-66c09eaebe5b.jpg", 
        harga: 64000
    },

    {
        idmenu : 10, 
        idkategori: 27, 
        menu: "set kekinian", 
        gambar: "stylecouple.jpg", 
        harga: 40000
    },

    {
        idmenu : 11, 
        idkategori: 28, 
        menu: "jaket wibu", 
        gambar: "jaketjpng.jpg", 
        harga: 60000
    },

    {
        idmenu : 12, 
        idkategori: 28, 
        menu: "baju jepang", 
        gambar: "bajujpng.jpg", 
        harga: 60000
    }
];

let tampil = tblmenu.map(function (kolom) {
    return `
    <div class="produk-content">
        <div class="image">
        <img src="image/${kolom.gambar}" alt="">
    </div>
    <div class="title">
        <h2>${kolom.menu}</h2>
    </div>
    <div class="harga">
        <h2>Rp ${kolom.harga}</h2>
    </div>
    
    <div class="btn-beli">
        <button data-idmenu=${kolom.idmenu}>beli</button>
    </div>
    `;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        //console.log(btnbeli[index].dataset["idmenu"]);
        //cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
    
}
// console.log(cart);

// console.log(tampil);