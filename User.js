window.userData = {}
window.isloggedin = false // Legger til en boolean variabel for å vise om brukeren er innlogget eller ikke
const userdatajson = localStorage.getItem('user')
if (userdatajson && window.isloggedin == true) {
  const userdata = JSON.parse(userdatajson)
  window.userData = userdata
  window.isloggedin = true
}

function LoginUser () {
  const LoginUsername = document.getElementById('username').value
  const LoginPassWord = document.getElementById('password').value
  if (LoginUsername.trim() === '' || LoginPassWord.trim() === '') {
    visFeilmelding()
    return
  }
  const userdata = {
    // Oppretter et objekt som inneholder brukernavn og passord.
    Username: LoginUsername,
    Password: LoginPassWord
  }

  fetch('https://moviespinappservicecode.azurewebsites.net/api/Users/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Angir typen innholdet som sendes som JSON.
    },
    body: JSON.stringify(userdata)
  })
    .then(response => {
      if (response.ok) {
        window.userData = userdata
        window.isloggedin = true
        localStorage.setItem('user', JSON.stringify(userdata))
        showHomePage()
      } else {
        visFeilmelding()
      }
    })
    .catch(error => {
      console.log(error)
    })
}

function Logout () {
  window.userData = {}
  window.isloggedin = false
  localStorage.removeItem('user')
  updateView()
  console.log('After logged out' + userdatajson)
  console.log('After logged out' + window.userData)
  console.log('After logged out' + window.isloggedin)
}
