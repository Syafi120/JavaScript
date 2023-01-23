document.querySelector("#klik"),addEventListener("click", tampil);

function tampil(params) {
    // console.log("tes");
    let url = "js/tblmenu.json";

    fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        // console.log(data);
        let output = "<h1>Data menu</h1> <table> <th>Menu</th> <th>Harga</th> <th>Warna</th>";
        data.forEach(element => {
            output += `
            <tr>
            <td><br>${element.menu}</td>
            <td><br>${element.harga}</td>
            <td><br>${element.warna}</td>
            </tr>
            `
        });
        output += "</tr> </table>";
        document.querySelector("#isi").innerHTML = output;
    })


}


// let tblmenu = [
// {
//     "idmenu"     : 8,
//     "idkategori" : 29,
//     "menu"       : "Baju terkini",
//     "harga"      : 64000,
//     "warna"      : ["hijau", "kuning", "merah"],
//     "stok"       : true,
//     "keterangan" : null


// },
// {
//     "idmenu"     : 10,
//     "idkategori" : 27,
//     "menu"       : "set kekinian",
//     "harga"      : 40000,
//     "warna"      : ["kuning", "merah"],
//     "stok"       : true,
//     "keterangan" : null


// }
// ];
// console.log(tblmenu[0].menu);