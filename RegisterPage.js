function RegisterView() {
  const app = document.getElementById("app");
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div id="batmanpitch">  </div>
  <div id="FrontLogin"></div>
  <div class="frontpageRegister">${register()}</div>
  </div>
  
    `;
}

function register() {
  return /*html*/ `
  <h4 class="Alert" id="registerdiv"></h4>
  <h1 class="RegisterHeadTitle">Create new account</h1>
  <div class="formbox">
  <div class="form2" id="registrationForm">
  
  <label class="LabelRegpage" for="regUsername">Username:</label>
  <input class="RegInput"  id="regUsername" name="regUsername" required /><br/><br/>
  
  <label class="LabelRegpage" for="regPassword">Password:</label>
  <input class="RegInput" type="password" id="regPassword"  name="regPassword" required/><br/><br/>
  
  <label class="LabelRegpage" for="email">Email:</label>
  <input class="RegInput"  id="email" name ="email" /><br/><br/>
  
  <button class="RegisterBox"  onclick="registerUser()">Register</button>
  </div>
</div>
`;
}

function FeilMelding(regUsername,regpassword){
if(regUsername == ""){
alert("Username Input is empty or not valid")
}else if(regpassword ==""){
alert("Password is empty or not valid");
}if(email == ""){
alert("EmailInput is empty or not valid");
}
}

function registerUser() {
  const regUsername = document.getElementById("regUsername").value;
  const regPassword = document.getElementById("regPassword").value;
  const email = document.getElementById("email").value;
if(regUsername.trim() === "" || regPassword.trim() === ""){
  FeilMelding(regUsername,regPassword);
}
  const userData = {
    Username: regUsername,
    Password: regPassword,
    Email: email,
  };
 
  fetch("https://moviespinappservicecode.azurewebsites.net/api/Users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((response) => {
    if (response.ok) {
      LoginView();
    } else if (response.status === 409) {
      UsernameOrEmailExists(); 
    } else {
      console.log("wrong details");
    }
  });
}

function UsernameOrEmailExists() {
  var alertRegisterDiv = document.getElementById("registerdiv");
  alertRegisterDiv.innerHTML = "Username or email already exi  sts";
}
