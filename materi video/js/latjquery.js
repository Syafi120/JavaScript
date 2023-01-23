// $(document).ready(function () {
//     console.log("server siap!");
// });

// $(function () {
//     console.log("siap!");
// });

$(function () {
    $("#isi").html("<h1>BELAJAR JQUERY</h1>");

    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("belajar javascript");
    });

    $("#isi").mouseleave(function () { 
        alert("mouse leave");
    });
});