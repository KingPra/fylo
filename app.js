// import job titles
// const teamInfo = [
//   "big boss",
//   "little boss",
//   "not boss",
//   "asst not boss ",
//   "random person"
// ];
import teamInfo from "./modules/teamInfo.js";
//import capitalize from "./modules/capitalize.js";
//import login from "./modules/login.js";

// checks to make sure input values on login page are not empty. Alerts user they are signed or if they need to fill out input field.

// check if submit is from login or email
function validate(val) {
  event.preventDefault();
  console.log("validate", val);
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
  email.length > 1 ? window.location.replace("./email-sent.html") : "";
}

// capitalize first letter of word;
const capitalize = word => word[0].toUpperCase() + word.slice(1);

// pull team info from api and create list of 5 team members
function getTeam() {
  const url = "https://randomuser.me/api/?results=5&nat=us";
  const frame = document.querySelector(".team");
  if (frame !== null) {
    fetch(url).then(function(response) {
      let data = response.json();
      data.then(data => {
        let people = data.results;
        // loop through data
        people.map((person, key) => {
          const title = teamInfo[key];
          //const frame = document.querySelector(".team");
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
          div.innerHTML = `${capitalize(fname)} ${capitalize(
            lname
          )} <br/> ${title}`;
          image.src = avatar;

          list.append(image);
          list.appendChild(div);
          frame.appendChild(list);
        });
      });
    });
  }
}

getTeam();
