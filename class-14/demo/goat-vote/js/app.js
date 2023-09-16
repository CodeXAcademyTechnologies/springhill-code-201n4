"use-strict";
const goats = [
  new Goat("Cruisin' Goat", "images/cruisin-goat.jpg"),
  new Goat("Float Your Goat", "images/float-your-goat.jpg"),
  new Goat("Goat Away", "images/goat-away.jpg"),
  new Goat("Goat Logo", "images/goat-logo.png"),
  new Goat("Goat Out of Hand", "images/goat-out-of-hand.jpg"),
  new Goat("Kissing Goat", "images/kissing-goat.jpg"),
  new Goat("Sassy Goat", "images/sassy-goat.jpg"),
  new Goat("Smiling Goat", "images/smiling-goat.jpg"),
  new Goat("Sweater Goat", "images/sweater-goat.jpg"),
];
let myChart = null;

let state = {
  goats: [],
  imageContainer: document.getElementById("image-container"),
  resultsSection: document.getElementById("results-section"),
  currentlyShownGoats: [],
  previouslyShownGoats: [],
};

// add event listener to image container
state.imageContainer.addEventListener("click", handleClickGoat);

// constructor function for goat
function Goat(name, filePath, views, votes) {
  this.name = name;
  this.filePath = filePath;
  this.lastClicked = null;
  this.votes = views;
  this.views = votes;
}
// method to render the goat image
Goat.prototype.render = function () {
  const goatImg = document.createElement("img");
  goatImg.src = this.filePath;
  goatImg.alt = this.name;

  state.imageContainer.appendChild(goatImg);
};

getLocalStorage();
renderGoats();
renderResults();

function renderGoats() {
  state.imageContainer.innerHTML = "";

  // make current shown to previous shown
  state.previouslyShownGoats = state.currentlyShownGoats;
  state.currentlyShownGoats = [];

  // get 3 random goats and add them to the currently shown array
  while (state.currentlyShownGoats.length < 3) {
    const randomInt = getRandomInt(0, state.goats.length);
    const randomGoat = state.goats[randomInt];
    if (
      !state.currentlyShownGoats.includes(randomGoat) &&
      !state.previouslyShownGoats.includes(randomGoat)
    ) {
      state.currentlyShownGoats.push(randomGoat);
    }
  }

  for (let i = 0; i < state.currentlyShownGoats.length; i++) {
    state.currentlyShownGoats[i].views++;
    state.currentlyShownGoats[i].render();
  }
}

function handleClickGoat(event) {
  event.preventDefault();

  const target = event.target.alt;

  // loop through the goats array, once we found the one that was clicked, we increment the goat object's clicks
  for (let i = 0; i < state.goats.length; i++) {
    if (target === state.goats[i].name) {
      state.goats[i].votes++;
    }
  }
  setLocalStorage();
  renderGoats();
  renderResults();
}

function renderResults() {
  state.resultsSection.innerHTML = "";
  renderChart();
  const resultsElm = document.createElement("ul");

  for (let i = 0; i < state.goats.length; i++) {
    const goat = state.goats[i];

    const resultItemElm = document.createElement("li");
    resultItemElm.textContent = `${goat.name} was seen ${goat.views} and was clicked ${goat.votes} times.`;
    resultsElm.appendChild(resultItemElm);
  }

  state.resultsSection.appendChild(resultsElm);
}

function renderChart() {
  const ctx = document.getElementById("my-chart");

  const labels = [];
  const votes = [];
  const views = [];

  // populate the labels, votes, and views arrays
  for (let i = 0; i < state.goats.length; i++) {
    const goat = state.goats[i];

    labels.push(goat.name);
    votes.push(goat.votes);
    views.push(goat.views);
  }

  // since we are re-rendering the chart, need to destroy old one before rendering new one
  if (myChart) {
    myChart.clear();
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels, // need to change
      datasets: [
        {
          label: "# of Votes",
          data: votes, // need to change
          borderWidth: 1,
        },
        {
          label: "# of Views",
          data: views, // need to change
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function getRandomInt(min, max) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// saving state to local storage
function setLocalStorage() {
  localStorage.setItem("state", JSON.stringify(state));
}

// pull from local storage
function getLocalStorage() {
  if (localStorage.state) {
    const storedData = JSON.parse(localStorage.state);

    for (let i = 0; i < storedData.goats.length; i++) {
      const goat = storedData.goats[i];
      const newGoat = new Goat(
        goat.name,
        goat.filePath,
        goat.views,
        goat.votes
      );

      state.goats.push(newGoat);
    }
  } else {
    for (let i = 0; i < goats.length; i++) {
      state.goats.push(goats[i]);
    }
  }
}
