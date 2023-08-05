"use strict";

let username = prompt("What is your name?");
console.log("User's name", username);

let fishing = prompt("Does Thomas like fishing?").toLowerCase();

if (fishing === "y" || fishing === "yes") {
  alert("That's correct. Thomas loves fishing!");
} else {
  alert("That's wrong. He does in fact love fishing");
}
