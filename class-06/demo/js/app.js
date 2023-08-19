"use strict";
const kittensContainerElem = document.getElementById("kitten-section");

const mittens = {
  name: "Mittens",
  age: 3,
  interests: ["sleeping", "knocking stuff over", "chasing tail"],
  dailyInterest: "",
  color: "brown",
  breed: "Calico",
  isGoodWithDogs: true,
  isGoodWithCats: true,
  isGoodWithKids: false,
  getDailyInterest: function () {
    const randomNumber = getRandomInt(0, this.interests.length);

    const randomInterest = this.interests[randomNumber];

    this.dailyInterest = randomInterest;
  },
  render: function () {
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
  },
};


const potato = {
  name: "Potato",
  age: 8,
  interests: ["walking", "climbing curtains", "cuddling"],
  dailyInterest: "",
  color: "orange",
  breed: "Egyptian",
  isGoodWithDogs: false,
  isGoodWithCats: true,
  isGoodWithKids: true,
  getDailyInterest: function () {
    const randomNumber = getRandomInt(0, this.interests.length);

    const randomInterest = this.interests[randomNumber];

    this.dailyInterest = randomInterest;
  },
  render: function () {
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
  },
};

const whiskers = {
  name: "whiskers",
  age: 1,
  interests: ["playing", "chasing other cats", "giving kisses"],
  dailyInterest: "",
  color: "grey",
  breed: "British",
  isGoodWithDogs: true,
  isGoodWithCats: true,
  isGoodWithKids: true,
  getDailyInterest: function () {
    const randomNumber = getRandomInt(0, this.interests.length);

    const randomInterest = this.interests[randomNumber];

    this.dailyInterest = randomInterest;
  },
  render: function () {
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
  },
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// test render
// mittens.getDailyInterest();
// mittens.render();

// store all of objects in an array
const kittens = [mittens, potato, whiskers];

// do stuff with those objects
for (let i = 0; i < kittens.length; i++) {
  kittens[i].getDailyInterest();
  kittens[i].render();
}
