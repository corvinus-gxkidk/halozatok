window.onload = letöltés()

var kérdés;
var jelenlegiKérdés = 0;

function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdés = d;
    kérdésMegjelenítés(0);
}

function kérdésMegjelenítés(k) {
    let ide_kérdés = document.getElementById("kérdés_szöveg");
    ide_kérdés.innerHTML = kérdés[k].questionText;
    console.log(`$"{kérdés.length} kérdés érkezett"`);

    for (var i = 1; i < 4; i++) {

        let elem_kérdés = document.getElementById("válasz" + i)
        elem_kérdés.innerText = kérdés[k]["answer" + i]
        //ide_kérdés.appendChild(elem_kérdés)
    }

    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés[k].image
}

function kattintottelőre() {
    jelenlegiKérdés++;
    
    if (jelenlegiKérdés >= kérdés.length) {
        jelenlegiKérdés = 0;
    }
    document.getElementById("válasz1").style.backgroundColor = "powderblue";
    document.getElementById("válasz2").style.backgroundColor = "powderblue";
    document.getElementById("válasz3").style.backgroundColor = "powderblue";

    kérdésMegjelenítés(jelenlegiKérdés);
    }

function kattintottvissza() {
    jelenlegiKérdés--;
    if (jelenlegiKérdés == -1) {
        jelenlegiKérdés = kérdés.length-1;
    }
    document.getElementById("válasz1").style.backgroundColor = "powderblue";
    document.getElementById("válasz2").style.backgroundColor = "powderblue";
    document.getElementById("válasz3").style.backgroundColor = "powderblue";
    
    kérdésMegjelenítés(jelenlegiKérdés);
}

function egyes() {
    if (kérdés[jelenlegiKérdés].correctAnswer == 1) {
        console.log("jó");
        document.getElementById("válasz1").style.backgroundColor = "green";
        document.getElementById("válasz2").style.backgroundColor = "red";
        document.getElementById("válasz3").style.backgroundColor = "red";
    }
}
function kettes() {
    if (kérdés[jelenlegiKérdés].correctAnswer == 2) {
        console.log("jó");
        document.getElementById("válasz1").style.backgroundColor = "red";
        document.getElementById("válasz2").style.backgroundColor = "green";
        document.getElementById("válasz3").style.backgroundColor = "red";
    }
}
function harmas() {
    if (kérdés[jelenlegiKérdés].correctAnswer == 3) {
        console.log("jó");
        document.getElementById("válasz1").style.backgroundColor = "red";
        document.getElementById("válasz2").style.backgroundColor = "red";
        document.getElementById("válasz3").style.backgroundColor = "green";
    }
}




