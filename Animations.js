let login = document.querySelector(".loginopn");

let signup = document.querySelector(".signupopn");

let logbutton = document.querySelector(".first");

let signbutton = document.querySelector(".second");

let card1 = document.querySelector(".logincrd");

let card2 = document.querySelector(".signupcrd");

logbutton.addEventListener("click", function () {
  logbutton.classList.add("active");
  login.classList.add("active");
  card1.classList.add("active");
  card2.classList.remove("active");

  logbutton.classList.remove("inactive");
  login.classList.remove("inactive");

  signbutton.classList.add("inactive");
  signup.classList.add("inactive");

  signbutton.classList.remove("active");
  signup.classList.remove("active");
});

signbutton.addEventListener("click", function () {
  signbutton.classList.add("active");
  signup.classList.add("active");
  card2.classList.add("active");
  card1.classList.remove("active");

  logbutton.classList.add("inactive");
  login.classList.add("inactive");

  logbutton.classList.remove("active");
  login.classList.remove("active");

  signbutton.classList.remove("inactive");
  signup.classList.remove("inactive");
});
