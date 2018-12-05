// displays alert box for login
function login() {
  const name = document.querySelector("#user-name").value;

  const pass = document.querySelector("#password").value;

  name.length > 0 && pass.length > 0
    ? alert(`You are now logged in as ${name}`)
    : alert("Please enter a a valid name and/or password.");
}

export default login();
