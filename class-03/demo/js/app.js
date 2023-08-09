"use strict";

let userScore = 0;

let username = prompt("What is your name?");
console.log("User's name", username);

let thomasFishing = prompt("Does Thomas like fishing?").toLowerCase();

if (thomasFishing === "y" || thomasFishing === "yes") {
  alert("That's correct. Thomas loves fishing!");
  userScore++;
  console.log("userScore: ", userScore);
} else {
  alert("That's wrong. Fishing is life.");
}

let ariArt = prompt("Does Ari like art?");
ariArt = ariArt.toUpperCase(); // yes -->>> YES

if (ariArt === "Y" || ariArt === "YES") {
  // console.log("ariArt: ", ariArt);
  alert("Yes! Ari is an artist.");
  userScore++;
  console.log("userScore: ", userScore);
} else {
  // console.log("ariArt: ", ariArt);
  alert("Wrong! Ari is in fact an artist.");
}

let khariCars = prompt("Does Khari like cars?").toLowerCase();

if (khariCars === "y" || khariCars === "yes") {
  console.log("khariCars: ", khariCars);
  alert("Yep, Kharis a car guy.");
  userScore++;
  console.log("userScore: ", userScore);
} else {
  console.log("khariCars: ", khariCars);
  alert("That's wrong, Khari likes cars.");
}

let correctAnswer = 7;
let userGuess;

while (correctAnswer !== userGuess) {
  userGuess = prompt("guess a number between 1 and 10");
  userGuess = parseInt(userGuess);

  if (userGuess < correctAnswer) {
    alert("Too low!");
  } else if (userGuess > correctAnswer) {
    alert("Too high.");
  } else if (userGuess === correctAnswer) {
    alert("That's right! The answer was " + correctAnswer);
    userScore++;
  }
}

let interestsArray = [
  "art",
  "cars",
  "coding",
  "video games",
  "cooking",
  "reading",
  "baseball",
  "soccer",
];
let attempts = 3;

hasAttempts: while (attempts !== 0) {
  attempts--;
  userGuess = prompt("Can you guess one of our class's interests?");

  for (let i = 0; i < interestsArray.length; i++) {
    if (userGuess === interestsArray[i]) {
      alert("Yep! " + interestsArray[i] + " is on the list.");
      break hasAttempts;
    }
  }

  alert("Wrong, Try again! You have " + attempts + " left.");

  if (!attempts) {
    alert("You're out of attempts");
  }
}

alert("Great job! Your score is " + userScore);
