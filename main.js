let header = document.querySelector("h1");
let questions = document.querySelectorAll("h2");
let modeButton = document.querySelector("#changeback");
let resultButton = document.querySelector("#result");
let label = document.querySelectorAll("#label");
let inputs = document.querySelectorAll("#choice")
let output = document.querySelector("#output")
let darkmode = false;
let count = 0;
let answer;
let answers = [];

document.body.style.background = "lightgreen";
modeButton.style.color = "red";

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
    document.body.style.background = "lightgreen";
    darkmode = false;
  }
});

resultButton.addEventListener("click", () => {
  count = 0;
  quizAnswer();
  createOutput()
  console.log(answers);
  console.log(count);
  //getPoints();
});


let quizAnswer = () => {
  inputs.forEach((input) => {
    if(input.checked){
      answer = input.value;
      console.log(answer);
      answers.push(answer);
      if(answer == "true"){
        count++;
      }
    }
  });
 
}

let createOutput = () => {
  output.textContent = "";
  let text = document.createElement("h2");
  text.textContent = "Du fick " + count + " poäng";
  text.style.color = "red";
  output.appendChild(text);
}

// let getPoints = () =>{
//   answers.forEach((input) => {
//     if(input === true){
//       points++;
//     }
//     console.log(points);
//   })
// }
// let q2answer = () => {
//   input2.forEach((input) => {
//     if(input.checked){
//       answer = input.value;
//       console.log(answer);
      
//     }
//   });
  

