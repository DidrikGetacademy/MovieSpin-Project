function Top10View () {
  const app = document.getElementById('app')
  app.innerHTML = /*HTML*/ `
    <div class="container">
    <div>${MenuSwitch()}</div>
    <div>${Reklame()}</div>
    <div>${images()}</div>
    <div>${MenuSwitch()}</div>
    <div>${HeadLineTop10()}</div>
    <div>${slideImageFunction2()}</div>
    <div>${InfoBox()}</div>

    </div>
    `
  SlideShow(slideIndex)
}

function MenuSwitch () {
  if (window.isloggedin == true) {
    return HomePageDropDownButtons() // Return HTML for logged-in user
  } else {
    return dropdownmenu() // Return HTML for non-logged-in user
  }
}

function InfoBox () {
  return /*HTML*/ `
    <div class="StreamingBox">
      <ul class="link"><a class="link2" href="#"></a></ul>
      <ul class="Description"></ul>
      <ul class="Price"></ul>
    </div>
  `
}

function HeadLineTop10 () {
  return /*HTML*/ `
<h1 class="FrontPageTitle">Cinema</h1>
`
}

function imagesBackground () {
  return /*HTML*/ `
  
          <img class="overskriftRamme" src="image/cinemaScreen.webp">
          <img class="overskriftbilde1" src="image/cinema.webp">
          <img class="overskriftbilde2" src="image/family.jpg">
      `
}
function slideImageFunction2 () {
  return /*html*/ `
      <div class="slider">
        <div class="slides">
          <img class="imagess" src="image/heyd.webp" alt="Image 1">
          <img class="imagess" src="image/rebel.jpg" alt="Image 2">
          <img class="imagess" src="image/hey.jpg" alt="Image 3">
        </div>
        <button class="prev" onclick="ChangeSlide(-1)">&#10094;</button>
        <button class="next" onclick="ChangeSlide(1)">&#10095;</button>
      </div>
    `
}
