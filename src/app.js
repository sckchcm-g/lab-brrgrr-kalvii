// Initial price of the burger
var wholeWheatBun = 10;

// Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

// Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

// Render the patty based on its state
function renderPatty() {
  var pattyElement = document.querySelector(".patty");
  if (state.Patty) {
    pattyElement.classList.add("active");
    pattyElement.textContent = "Patty";
  } else {
    pattyElement.classList.remove("active");
    pattyElement.textContent = "";
  }
}

// Render the cheese based on its state
function renderCheese() {
  // Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  var cheeseElement = document.querySelector(".cheese");

  if (state.Cheese) {
    cheeseElement.classList.add("active");
    cheeseElement.textContent = "Cheese";
  } else {
    cheeseElement.classList.remove("active");
    cheeseElement.textContent = "";
  }
}

// Render the tomatoes based on its state
function renderTomatoes() {
  // Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  var tomatoesElement = document.querySelector(".tomatoes");
  if (state.Tomatoes) {
    tomatoesElement.classList.add("active");
    tomatoesElement.textContent = "Tomatoes";
  } else {
    tomatoesElement.classList.remove("active");
    tomatoesElement.textContent = "";
  }
}

// Render the onions based on its state
function renderOnions() {
  // Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  var onionsElement = document.querySelector(".onions");
  if (state.Onions) {
    onionsElement.classList.add("active");
    onionsElement.textContent = "Onions";
  } else {
    onionsElement.classList.remove("active");
    onionsElement.textContent = "";
  }
}

// Render the lettuce based on its state
function renderLettuce() {
  // Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  var lettuceElement = document.querySelector(".lettuce");

  if (state.Lettuce) {
    lettuceElement.classList.add("active");
    lettuceElement.textContent = "Lettuce";
  } else {
    lettuceElement.classList.remove("active");
    lettuceElement.textContent = "";
  }
}

// Setup event listener for the patty button
document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
}
