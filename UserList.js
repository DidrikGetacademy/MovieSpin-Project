function showHomePage () {
  const app = document.getElementById('app')
  app.innerHTML = /*html*/ `
  <div>${Reklame()}</div>
<div>${images()}</div>
<div>${HomePageDropDownButtons()}</div>
<div>${Title()}</div>
<div>${Projects()}</div> 
<div>${projectsView()}</div> 
`
}

function HomePageDropDownButtons () {
  return /*HTML*/ `
    <div class="dropdown-content">
    <button Class="streamingWebsites" onclick="streamingWebsites()">Streaming Websites</button>
    <button class="Top10Button" onclick="Top10View()">Cinema</button>
    <button class="MyListButton" onclick="News()">News</button>
    <button class="FrontPage" onclick="updateView()">FrontPage</button>
    <button class="HomeButton" onclick="showHomePage()">My List</button>
    <button class="Logoutbutton" onclick="Logout()">Logout</button>
    </div>
    `
}

function projectsView () {
  return /*html*/ `
<div class="titleDiv" id="projectContainer">
<ul id="projectList"></ul>
</div>`
}

function projectFunction (data) {
  var projectList = document.getElementById('projectList')
  data.forEach(project => {
    var listitem = document.createElement('li')
    listitem.textContent = project.projectTitle
    projectList.appendChild(listitem)
  })
}

function Projects () {
  fetch(
    'https://moviespinappservicecode.azurewebsites.net/api/Users/ProjectList',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(window.userData.Username)
    }
  )
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        response.json().then(errorData => {
          console.error('Error:', errorData)
        })
        throw new Error('Network response was not ok.')
      }
    })
    .then(data => {
      console.log('Received project data:', data)
      projectFunction(data)
    })
    .catch(error => {
      console.error('Network error:', error)
    })
}
