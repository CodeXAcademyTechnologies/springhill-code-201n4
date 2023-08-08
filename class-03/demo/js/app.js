"use strict";

let username = prompt("What is your name?");
console.log("User's name", username);

let thomasFishing = prompt("Does Thomas like fishing?").toLowerCase();

if (thomasFishing === "y" || thomasFishing === "yes") {
  alert("That's correct. Thomas loves fishing!");
} else {
  alert("That's wrong. He does in fact love fishing");
}

let ariArt = prompt("Does Ari like art?");
ariArt = ariArt.toUpperCase(); // yes -->>> YES

if (ariArt === "Y" || ariArt === "YES") {
  // console.log("ariArt: ", ariArt);
  alert("Yes! Ari is our resident artist here at Codex Academy");
} else {
  // console.log("ariArt: ", ariArt);
  alert("Worng! Ari is in fact an artist");
}
