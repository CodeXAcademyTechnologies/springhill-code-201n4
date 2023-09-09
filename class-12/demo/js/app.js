"use-strict";

const state = {
  goats: [
    new Goat("Cruisin' Goat", "images/cruisin-goat.jpg"),
    new Goat("Float Your Goat", "images/float-your-goat.jpg"),
    new Goat("Goat Away", "images/goat-away.jpg"),
    new Goat("Goat Logo", "images/goat-logo.png"),
    new Goat("Goat Out of Hand", "images/goat-out-of-hand.jpg"),
    new Goat("Kissing Goat", "images/kissing-goat.jpg"),
    new Goat("Sassy Goat", "images/sassy-goat.jpg"),
    new Goat("Smiling Goat", "images/smiling-goat.jpg"),
    new Goat("Sweater Goat", "images/sweater-goat.jpg"),
  ],
  imageContainer: document.getElementById("image-container"),
  resultsSection: document.getElementById("results-section"),
  myChart: null,
};

// constructor function for goat
function Goat(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.lastClicked = null;
  this.votes = 0;
  this.views = 0;
}
// method to render the goat image
Goat.prototype.render = function () {
  const goatImg = document.createElement("img");
  goatImg.src = this.filePath;
  goatImg.alt = this.name;

  state.imageContainer.appendChild(goatImg);
};

function renderGoats() {
  state.imageContainer.innerHTML = "";
  state.imageContainer.addEventListener("click", handleClickGoat);

  let goatOne = state.goats[getRandomInt(0, state.goats.length)];
  let goatTwo = state.goats[getRandomInt(0, state.goats.length)];

  while (goatOne === goatTwo) {
    goatOne = state.goats[getRandomInt(0, state.goats.length)];
  }

  goatOne.views++;
  goatTwo.views++;

  goatOne.render();
  goatTwo.render();
}

renderGoats();

function handleClickGoat(event) {
  event.preventDefault();

  const target = event.target.alt;

  // loop through the goats array, once we found the one that was clicked, we increment the goat object's clicks
  for (let i = 0; i < state.goats.length; i++) {
    if (target === state.goats[i].name) {
      state.goats[i].votes++;
    }
  }

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
  if (state.myChart) {
    state.myChart.clear();
    state.myChart.destroy();
  }

  state.myChart = new Chart(ctx, {
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
