window.onload = function () {
    kérdésBetöltés(jelenlegiKérdés);
    kérdések();
}

var kérdés;
var jelenlegiKérdés = 1;
var összkérdésszám;

var hotList = [];           
var questionsInHotList = 3; 
var displayedQuestion;      
var nextQuestion = 1; 

var displayedQuestion;     
var nextQuestion = 1;

var timeoutHandler;



function kérdésBetöltés(id, destination) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás letöltés: ${response.status}`)
            }
            else {
                return response.json()
            }
        }
        )
        .then(
            q => {
                hotList[destination].kérdés = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${id}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) {
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
                }
            }
        );
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

/*function kérdésMegjelenítés(kérdés) {
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
*/
function kérdésMegjelenítés() {
    let kérdés = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    
}



function kattintottelőre() {
    clearTimeout(timeoutHandler)
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList) {
        displayedQuestion = 0;
        kérdésMegjelenítés();
        document.getElementById(`válasz1`).style.pointerEvents = "auto"
    }
    else {
        displayedQuestion++;
    }
    kérdésBetöltés(jelenlegiKérdés)
    document.getElementById("válasz1").style.backgroundColor = "powderblue";
    document.getElementById("válasz2").style.backgroundColor = "powderblue";
    document.getElementById("válasz3").style.backgroundColor = "powderblue";

    kérdésMegjelenítés(jelenlegiKérdés);
}

function kattintottvissza() {
    clearTimeout(timeoutHandler)
    displayedQuestion--;
    if (displayedQuestion == -1) {
        displayedQuestion = összkérdésszám;
        document.getElementById(`válasz1`).style.pointerEvents = "auto"
    }
    kérdésBetöltés(jelenlegiKérdés)
    document.getElementById("válasz1").style.backgroundColor = "powderblue";
    document.getElementById("válasz2").style.backgroundColor = "powderblue";
    document.getElementById("válasz3").style.backgroundColor = "powderblue";

    kérdésMegjelenítés(jelenlegiKérdés);
}

function egyes() {
    if (kérdés[displayedQuestion].correctAnswer == 1) {
        console.log("jó");
        goodAnswers++;
        timeoutHandler = setTimeout(előre, 3000);
        document.getElementById("válasz1").style.backgroundColor = "green";
        document.getElementById("válasz2").style.backgroundColor = "red";
        document.getElementById("válasz3").style.backgroundColor = "red";
        document.getElementById(`válasz1`).style.pointerEvents = "none"
    }
}
function kettes() {
    if (kérdés[displayedQuestion].correctAnswer == 2) {
        console.log("jó");
        goodAnswers++;
        timeoutHandler = setTimeout(előre, 3000);
        document.getElementById("válasz1").style.backgroundColor = "red";
        document.getElementById("válasz2").style.backgroundColor = "green";
        document.getElementById("válasz3").style.backgroundColor = "red";
        document.getElementById(`válasz1`).style.pointerEvents = "none"
    }
}
function harmas() {
    if (kérdés[displayedQuestion].correctAnswer == 3) {
        console.log("jó");
        goodAnswers++;
        timeoutHandler = setTimeout(előre, 3000);
        document.getElementById("válasz1").style.backgroundColor = "red";
        document.getElementById("válasz2").style.backgroundColor = "red";
        document.getElementById("válasz3").style.backgroundColor = "green";
        document.getElementById(`válasz1`).style.pointerEvents = "none"
    }
}
function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }


    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}





