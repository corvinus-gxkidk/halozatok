window.onload = function () {

    //Valamiért a faktoriálist nem írja be, így onnan nem tudok tovább haladni, de nem találom a hiba forrását...
    //A szorzótábla még működött, de miután átírtam a kódom elszállt, pedig 2 különböző Pascal számítással is próbáltam
    var Faktorialis(int n)
    {
        if (n == 0) return 1;
        return n * Faktorialis(n - 1);
    }

    var fakt = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        }
        else {
            return n * fakt(n - 1);
        }
    }

    let hova = document.getElementById("ide");

    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor);
        for (var o = 0; o < 10; o++) {
            let szám = document.createElement("div");
            sor.appendChild(szám)
            szám.classList.add("elem");
            szám.innerText = Fakt(s) / (Fakt(o) * (Fakt(s- o));
            szám.style.background = `rgb(${255 / 10 * s},0,${255 / 10 * o})`;
            sor.appendChild(szám);

        }
    }

}