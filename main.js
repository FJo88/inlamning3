let header = document.querySelector("h1");
let questions = document.querySelectorAll("h2");
let modeButton = document.querySelector("#changeback");
let resultButton = document.querySelector("#result");
let label = document.querySelectorAll("#label");
let inputs = document.querySelectorAll("#choice")
let checkInput = document.querySelectorAll('input[type="checkbox"]');

let output = document.querySelector("#output")
let darkmode = false;
let count = 0;
let answer;
let check = [];
let answers = [];

document.body.style.background = "lightblue";
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
    document.body.style.background = "lightblue";
    darkmode = false;
  }
});

resultButton.addEventListener("click", () => {
  count = 0;
  quizAnswer();
  lastQuestionInput();
  createOutput()
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

let lastQuestionInput = () => {
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
 
  text.style.border = "brown solid 10px"
  text.style.padding = "30px";
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
  

