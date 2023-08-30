"use strict";
const kittensContainerElem = document.getElementById("kitten-section");

function Kitten(name, age, interests, color, breed, imgSrc) {
  this.name = name; // string
  this.age = age; // number
  this.color = color; // string
  this.breed = breed; // string
  this.imgSrc = imgSrc; // string
  this.interests = interests; // array
  this.dailyInterest = ""; // string
}
Kitten.prototype.getDailyInterest = function () {
  const randomNumber = getRandomInt(0, this.interests.length);

  const randomInterest = this.interests[randomNumber];

  this.dailyInterest = randomInterest;
};
Kitten.prototype.render = function () {
  const bioContainerElem = document.createElement("div");

  const imgElem = document.createElement("img");
  imgElem.src = this.imgSrc;
  imgElem.alt = `${this.color} ${this.breed} kitten`;
  imgElem.width = 200;
  bioContainerElem.appendChild(imgElem);

  const textContainerElem = document.createElement("div");
  bioContainerElem.appendChild(textContainerElem);

  const nameElem = document.createElement("p");
  nameElem.textContent = `Name: ${this.name}`;
  textContainerElem.appendChild(nameElem);

  const ageElem = document.createElement("p");
  ageElem.textContent = `Age: ${this.age}`;
  textContainerElem.appendChild(ageElem);

  const dailyInterest = document.createElement("p");
  dailyInterest.textContent = `Interest of the day: ${this.dailyInterest}`;
  textContainerElem.appendChild(dailyInterest);

  const breedElem = document.createElement("p");
  breedElem.textContent = `Breed: ${this.breed}`;
  textContainerElem.appendChild(breedElem);

  const colorElem = document.createElement("p");
  colorElem.textContent = `Color: ${this.color}`;
  textContainerElem.appendChild(colorElem);

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
  "Calico",
  "img/brown.jpg"
);
const potato = new Kitten(
  "Potato",
  8,
  ["walking", "climbing curtains", "cuddling"],
  "orange",
  "egyptian",
  "img/orange.jpg"
);
const whiskers = new Kitten(
  "Whiskers",
  4,
  ["playing", "chasing other cats", "giving kisses"],
  "Grey",
  "British",
  "img/grey.jpg"
);

// store all of objects in an array
const kittens = [mittens, potato, whiskers];

// do stuff with those objects
function renderAllKittens() {
  kittensContainerElem.innerHTML = ""; //reset the html to nothing
  for (let i = 0; i < kittens.length; i++) {
    kittens[i].getDailyInterest();
    kittens[i].render();
  }
}

renderAllKittens();

const kittenForm = document.getElementById("kitten-form");

kittenForm.addEventListener("submit", handleSubmitKitten);

function handleSubmitKitten(event) {
  event.preventDefault();

  const kittenName = event.target.kittenName.value;
  const age = event.target.age.value;
  const color = event.target.color.value;
  const breed = event.target.breed.value;
  const imgSrc = event.target.imgSrc.value;
  let interests = event.target.interests.value;
  interests = interests.split(", "); // turn interests into an array

  const newKitten = new Kitten(
    kittenName,
    age,
    interests,
    color,
    breed,
    imgSrc
  );

  kittens.push(newKitten);

  renderAllKittens();

  event.target.reset();
}
