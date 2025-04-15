
function LoginView() {
  const app = document.getElementById("app");
  app.innerHTML = /*HTML*/ `
  <div class="container">
  <div id="batmanpitch"> </div>
  <div id="FrontLogin"></div>
  <div>${Login()}</div>
  </div>
    `;
}

function visFeilmelding() {
  var alertLoginDiv = document.getElementById("alertLogin");
  alertLoginDiv.innerHTML =
    "Feil brukernavn eller passord. Vennligst prøv igjen.";
}

function Login() {
  return /*html*/ `
  <h4 class="Alert" id="alertLogin"></h4>
        <h1 class="loginTitle">LoginPage</h1>
        <form id="loginForm">
            <label  class="Usernamelabel" for="username">Username:</label>
            <input type="text" id="username" class="UsernameBox" name="username" required/><br><br/>
            <label class="PasswordLabel" for="password">Password:</label>
            <input id="password" class="PasswordBox" type="password"  name="password" required  /><br><br/>
            <button type="button" onclick="LoginUser()"   class="LoginBox">Login</button>
        </form>
    `;
}

