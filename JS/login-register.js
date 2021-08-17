let signInButton = document.querySelector(".loginbtn");
let loginbutton = document.querySelector(".signInButton");

function loginbtn() {
  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  console.log(username, password);
  fetch("http://powerful-cove-00684.herokuapp.com/auth", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        fetch(
          `https://powerful-cove-00684.herokuapp.com/get-user/'${username}'/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `jwt ${window.localStorage["jwt-token"]}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            window.localStorage["user-id"] = data.user[0];
          });
        console.log(data);
        myStorage = window.localStorage;
        myStorage.setItem("jwt-token", data["access_token"]);
        myStorage.setItem("username", username);
        myStorage.setItem("password", password);
        window.location.href = "/main.html";
      }
    });
}

function register() {
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let email = document.querySelector(".email").value;
  let username = document.querySelectorAll(".username")[1].value;
  let password = document.querySelectorAll(".password")[1].value;
  console.log(firstName, lastName, email, username, password);
  fetch("http://powerful-cove-00684.herokuapp.com/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data["access_token"]) {
        console.log(data);
        myStorage = window.localStorage;
        myStorage.setItem("jwt-token", data["access_token"]);
        myStorage.setItem("username", username);
        myStorage.setItem("password", password);
        window.location.href = "/main.html";
      }
    });
}
