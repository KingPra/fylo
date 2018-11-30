// checks to make sure input values on login page are not empty. Alerts user they are signed or if they need to fill out input field.

import teamInfo from "./teamInfo.js";
//const teamInfo = require("./teamInfo.js");
console.log(teamInfo);

function validate(val) {
  event.preventDefault();
  val === "login" ? login() : email();
}

// displays alert box for login
function login() {
  const name = document.querySelector("#user-name").value;

  const pass = document.querySelector("#password").value;

  name.length > 0 && pass.length > 0
    ? alert(`You are now logged in as ${name}`)
    : alert("Please enter a a valid name and/or password.");
}

// check email input fields are not empty and displays email sent message
function email() {
  const email = document.querySelector(".email").value;
  console.log(email.length);

  email.length > 1 ? window.location.replace("./email-sent.html") : "";
}

// capitalize first letter of word;
const capitalize = word => word[0].toUpperCase() + word.slice(1);

// pull team info from api and create list of 5 team members
function getTeam() {
  const url = "https://randomuser.me/api/?results=5&nat=us";

  fetch(url).then(function(response) {
    let data = response.json();
    data.then(data => {
      let people = data.results;

      // loop through data
      people.map(person => {
        console.log(person);
        const frame = document.querySelector(".team");
        const list = document.createElement("li");
        const div = document.createElement("div");
        const avatar = `${person.picture.large}`;
        const image = new Image();
        const fname = person.name.first;
        const lname = person.name.last;
        // apply class names to all dynamically created elements;
        list.className = "team__card";
        image.className = "team__img";
        div.className = "team__name";
        div.textContent = `${capitalize(fname)} ${capitalize(lname)}`;
        image.src = avatar;

        list.append(image);
        list.appendChild(div);
        frame.appendChild(list);
      });
    });
  });
}

getTeam();
