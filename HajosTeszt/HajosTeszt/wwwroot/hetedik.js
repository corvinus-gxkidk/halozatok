/*window.onload = function () {
    kérdésBetöltés(jelenlegiKérdés);
    kérdések();
}

var kérdés;
var jelenlegiKérdés = 1;
var összkérdésszám;

var hotList = [];
var questionsInHotList = 3
var displayedQuestion;
var nextQuestion = 1;





function kérdésBetöltés(jelenlegikérdés, destination) {
    fetch(`/questions/${jelenlegikérdés}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás letöltés: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(
            q => {
                hotList[destination].kérdés = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${jelenlegikérdés}. kérdés letöltve a hot list ${destination}. helyére`)
            }
        );
}  



function kérdések() {
    fetch('/questions/all')
        .then(response => response.json())
        .then(data => összkérdés(data)
);}

function összkérdés(data) {
    összkérdésszám = Object.keys(data).length
    console.log(összkérdésszám);
}

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3

    megoldás = kérdés.correctAnswer
    console.log(megoldás)
    
    if (kérdés.image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.src = "";
    }
    
    
}



function kattintottelőre() { 
    if (jelenlegiKérdés == összkérdésszám) {
        jelenlegiKérdés = 1;
    }
    else {
        jelenlegiKérdés++;
    }
    kérdésBetöltés(jelenlegiKérdés)
    document.getElementById("válasz1").style.backgroundColor = "powderblue";
    document.getElementById("válasz2").style.backgroundColor = "powderblue";
    document.getElementById("válasz3").style.backgroundColor = "powderblue";

    kérdésMegjelenítés(jelenlegiKérdés);
    }

function kattintottvissza() {
    jelenlegiKérdés--;
    if (jelenlegiKérdés == -1) {
        jelenlegiKérdés = összkérdésszám;
    }
    kérdésBetöltés(jelenlegiKérdés)
    document.getElementById("válasz1").style.backgroundColor = "powderblue";
    document.getElementById("válasz2").style.backgroundColor = "powderblue";
    document.getElementById("válasz3").style.backgroundColor = "powderblue";
    
    kérdésMegjelenítés(jelenlegiKérdés);
}

function egyes() {
    if (megoldás == 1) {
        console.log("jó");
        document.getElementById("válasz1").style.backgroundColor = "green";
        document.getElementById("válasz2").style.backgroundColor = "red";
        document.getElementById("válasz3").style.backgroundColor = "red";
    }
}
function kettes() {
    if (megoldás == 2) {
        console.log("jó");
        document.getElementById("válasz1").style.backgroundColor = "red";
        document.getElementById("válasz2").style.backgroundColor = "green";
        document.getElementById("válasz3").style.backgroundColor = "red";
    }
}
function harmas() {
    if (megoldás == 3) {
        console.log("jó");
        document.getElementById("válasz1").style.backgroundColor = "red";
        document.getElementById("válasz2").style.backgroundColor = "red";
        document.getElementById("válasz3").style.backgroundColor = "green";
    }
}
function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {};
            goodAnswers: 0
        }
        hotList[i] = q
    }
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}





*/
window.onload = function () {
    kérdésBetöltés(jelenlegiKérdés);
    kérdések();
}

var kérdés;
var jelenlegiKérdés = 1;
var összkérdésszám;



function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}


function kérdések() {
    fetch('/questions/all')
        .then(response => response.json())
        .then(data => összkérdés(data)
        );
}

function összkérdés(data) {
    összkérdésszám = Object.keys(data).length
}

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    if (kérdés.image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kép1").src = "";
    }

}



function kattintottelőre() {
    if (jelenlegiKérdés == összkérdésszám) {
        jelenlegiKérdés = 1;
    }
    else {
        jelenlegiKérdés++;
    }
    kérdésBetöltés(jelenlegiKérdés)
    document.getElementById("válasz1").style.backgroundColor = "powderblue";
    document.getElementById("válasz2").style.backgroundColor = "powderblue";
    document.getElementById("válasz3").style.backgroundColor = "powderblue";

    kérdésMegjelenítés(jelenlegiKérdés);
}

function kattintottvissza() {
    jelenlegiKérdés--;
    if (jelenlegiKérdés == -1) {
        jelenlegiKérdés = összkérdésszám;
    }
    kérdésBetöltés(jelenlegiKérdés)
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




