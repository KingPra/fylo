function login() {
  event.preventDefault();

  const name = document.querySelector("#user-name").value;

  const pass = document.querySelector("#password").value;
  console.log(pass);

  name.length > 0 && pass.length > 0
    ? alert(`You are now logged in as ${name}`)
    : alert("Please enter a a valid name and/or password.");
}
