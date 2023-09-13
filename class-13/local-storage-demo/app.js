"use strict";

// ******************** basic storage ********************
const username = "bob";

// add to local storage
localStorage.setItem("username", "bob");

// get an item from local storage
const localStorageUsername = localStorage.getItem("username"); // 'bob'

// remove an item from local storage
localStorage.removeItem("username");

// add again for demo purposes
localStorage.setItem("username", "bob");

localStorage.clear();

// ******************** array storage ********************

const salmonSpecies = ["chinook", "coho", "pinks", "chum"];

// convert array to a string and store with a key of 'salmons'
localStorage.setItem("salmons", JSON.stringify(salmonSpecies));

// get the string copy of the array from local storage
let localStorageSalmons = localStorage.getItem("salmons");

// convert string back into array
localStorageSalmons = JSON.parse(localStorageSalmons);

// saving object to local storage
let state = {
  // username: "sally",
  darkMode: "true",
  lastVisited: new Date(),
  timeSpent: 4949,
};

let user = null;

// convert object to string and store in local storage
localStorage.setItem("state", JSON.stringify(state));
localStorage.setItem("username", "sally");

function handlePageLoad() {
  // convert it back to an object and get it
  const retrievedState = JSON.parse(localStorage.getItem("state"));
  const retrievedUser = localStorage.getItem("username");

  state = retrievedState;
  user = retrievedUser;
}

handlePageLoad();
