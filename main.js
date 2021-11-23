//Hämta de olika elementen från HTML:en med diverse selektorer
// Sparar de sedan i passande variabler
let header = document.querySelector("h1");
let questions = document.querySelectorAll("h2");
let modeButton = document.querySelector("#changemode");
let resultButton = document.querySelector("#result");
let label = document.querySelectorAll("#label");
let inputs = document.querySelectorAll("#choice")
let checkInput = document.querySelectorAll('input[type="checkbox"]');
let output = document.querySelector("#output")

//Skapar variablerna som behövs
let darkmode = false;
let count = 0;
let answer;
let check = [];


document.body.style.background = "lightgrey";
modeButton.style.color = "red";
resultButton.style.color = "red";

// Kopplar en listener till knappen med id="changemode". Använder en boolean för att kontrollera i vilket mode man 
// befinner sig i. Loopar sen igenom alla element (input, label, h2) och sätter en lämplig färg på dem. 
// Ändrar sedan variabeln darkmode
modeButton.addEventListener("click", () => {
  if (darkmode === false) {
    questions.forEach((element) => {
      element.style.color = "yellow";
    });
    label.forEach((element) => {
      element.style.color = "lightblue";
    });
    header.style.color = "yellow";
    document.body.style.background = "black";

    darkmode = true;
  } else {
    questions.forEach((element) => {
      element.style.color = "black";
    });
    label.forEach((element) => {
      element.style.color = "black";
    });

    header.style.color = "black";
    document.body.style.background = "lightgrey";
    darkmode = false;
  }
});

// I resultButton kopplar man en listener som börjar med att nolla count (Antalet rätt). 
// Sedan anropar jag mina 3 funktioner.
resultButton.addEventListener("click", () => {
  count = 0;
  quizAnswer();
  lastQuestionAnswer();
  createOutput()
});

//Kontrollerar om radiobuttons är ifyllda. Om de är det hämtar man value, kontrollerar sedan om det är true.
//Value är satt i HTML:en i detta fallet. Räknar upp counter vid rätt svar.
let quizAnswer = () => {
  inputs.forEach((input) => {
    if(input.checked){
      answer = input.value;
    if(answer == "true"){
        count++;
      }
    }
  });
 
}
//Hämtar in checkbox-värdena och sparar in i en array. Kontrollerar sen alla värde i alla element. Om det 
// överensstämmer med villkoret (rätta svar) så räknas count upp.
let lastQuestionAnswer = () => {
  check = [];
  checkInput.forEach(item =>{
    let data = item.checked;
    check.push(data);
  })
  if(check[0] === false && check[1] === true && check[2] === false 
    && check[3] === true && check[4] === true){
    count++;
  }
}


//Skapar utskriften i domen. Förändrar färgen på texten beroende på antalet rätt svar
//Skapar element och fyller med text samt count-variabeln som håller koll på antal rätt svar. Appendar. 
let createOutput = () => {
  output.textContent = "";
  let text = document.createElement("h2");
  text.textContent = "Du fick " + count + " poäng";
  
  if(count === 7){
  text.style.color = "green";
  }
  else if(count <= 3){
    text.style.color = "red";
  }
  else{
    text.style.color = "orange";
  }
  
  text.style.border = "brown solid 10px";
  text.style.padding = "50px";
  output.appendChild(text);
}



  

