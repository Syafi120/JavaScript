let a = 0
naik.onclick = function () {
    a++;
    // console.log("naik");
    document.querySelector("h1").innerHTML = a;
}

turun.onclick = function () {
    if (a > 0) {
        a--;
        // console.log("turun");
        document.querySelector("h1").innerHTML = a;
    }
}