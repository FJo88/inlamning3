let header = document.querySelector("h1");
let questions = document.querySelectorAll("h3");
let modeButton = document.querySelector("#changeback");
let resultButton = document.querySelector("#result");
let label = document.querySelectorAll("#label");
let darkmode = false;
document.body.style.background = "lightblue";
modeButton.style.color = "red";

modeButton.addEventListener("click", () => {
  console.log("hej");
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

resultButton.addEventListener("click", () => {});

