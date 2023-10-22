"use strict";

// defines outside the click function because in every click it generate new random number so to prevent it.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log("Secret number = " + secretNumber);
let score = 20;
let highscore = 0;

function displayMessage(msg) {
  document.querySelector(".message").innerHTML = msg;
}

document.querySelector(".check").addEventListener("click", () => {
  const guessValue = Number(document.querySelector(".guess").value);
  //   const message = document.querySelector(".message");
  console.log(guessValue, typeof guessValue);

  // when player wins
  if (guessValue === secretNumber) {
    // message.innerHTML = "🎉 Correct Number";
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").innerHTML = secretNumber;
    const changeColor = (document.body.style.backgroundColor = "#60b347");
    const changeWidth = (document.querySelector(".number").style.width =
      "30rem");
    console.log("Width change = " + changeWidth);
    console.log("Color green = " + changeColor);

    // highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").innerHTML = highscore;
    }
  }

  //   // guess to high
  //   if (guessValue > secretNumber) {
  //     message.innerHTML = "📈 To High!";
  //     console.log(message);
  //   }

  //   // guess to low
  //   if (guessValue < secretNumber) {
  //     message.innerHTML = "📉 To Low!";
  //     console.log(message);
  //   }

  // decreamenting the score if guess != secret
  if (guessValue !== secretNumber) {
    displayMessage(guessValue < secretNumber ? "📉 To Low!" : "📈 To High!");
    score--;
    console.log("Score = " + score);
    const scoreValue = document.querySelector(".score");
    scoreValue.innerHTML = score;
    if (score <= 0) {
      score = 1;
      displayMessage("💥 You Loose the Game!");
      const changeColor = (document.body.style.backgroundColor = " #ff2f2fea");
      console.log("Change color red = " + changeColor);
      document.querySelector(".number").innerHTML = secretNumber;
      const changeWidth = (document.querySelector(".number").style.width =
        "30rem");
    }
  }

  // when there is no input
  if (!guessValue) {
    displayMessage("⛔ No number!");
  }
});

// part 2 for again
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log("Again secret number = " + secretNumber);
  const number = (document.querySelector(".number").innerHTML = "?");
  const backgroundColor = (document.body.style.backgroundColor = "#222");
  const initialWidth = (document.querySelector(".number").style.width =
    "15rem");
  const initialGuessValue = (document.querySelector(".guess").value = "");
  const inititalScore = (document.querySelector(".score").innerHTML = score);
  const intitalMessage = (document.querySelector(".message").innerHTML =
    "Start guessing...");
});
