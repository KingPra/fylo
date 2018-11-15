// checks to make sure input values on login page are not empty. Alerts user they are signed or if they need to fill out input field.
function validate(val) {
  event.preventDefault();
  val === "login" ? login() : email();
}

function login() {
  const name = document.querySelector("#user-name").value;

  const pass = document.querySelector("#password").value;

  name.length > 0 && pass.length > 0
    ? alert(`You are now logged in as ${name}`)
    : alert("Please enter a a valid name and/or password.");
}

function email() {
  const email = document.querySelector(".email").value;
  console.log(email.length);

  email.length > 1 ? window.location.replace("./email-sent.html") : "";
}

function team() {
  console.log("teamo supreme-o");
}
