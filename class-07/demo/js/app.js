"use strict";
const kittensContainerElem = document.getElementById("kitten-section");

function Kitten(name, age, interests, color, breed) {
  this.name = name;
  this.age = age;
  this.interests = interests;
  this.color = color;
  this.breed = breed;
  this.dailyInterest = "";
}
Kitten.prototype.getDailyInterest = function () {
  const randomNumber = getRandomInt(0, this.interests.length);

  const randomInterest = this.interests[randomNumber];

  this.dailyInterest = randomInterest;
};
Kitten.prototype.render = function () {
  const bioContainerElem = document.createElement("div");

  const nameElem = document.createElement("p");
  nameElem.textContent = `Name: ${this.name}`;
  bioContainerElem.appendChild(nameElem);

  const ageElem = document.createElement("p");
  ageElem.textContent = `Age: ${this.age}`;
  bioContainerElem.appendChild(ageElem);

  const dailyInterest = document.createElement("p");
  dailyInterest.textContent = `Interest of the day: ${this.dailyInterest}`;
  bioContainerElem.appendChild(dailyInterest);

  kittensContainerElem.appendChild(bioContainerElem);
};

// helper function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// instantiate kitten objects
const mittens = new Kitten(
  "Mittens",
  3,
  ["sleeping", "knocking stuff over", "chasing tail"],
  "brown",
  "Calico"
);
const potato = new Kitten(
  "Potato",
  8,
  ["walking", "climbing curtains", "cuddling"],
  "orange",
  "egyptian"
);
const whiskers = new Kitten(
  "Whiskers",
  4,
  ["playing", "chasing other cats", "giving kisses"],
  "Grey",
  "British"
);

// store all of objects in an array
const kittens = [mittens, potato, whiskers];

// do stuff with those objects
for (let i = 0; i < kittens.length; i++) {
  kittens[i].getDailyInterest();
  kittens[i].render();
}
