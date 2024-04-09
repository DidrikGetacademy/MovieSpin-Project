
function streamingWebsites() {
  const app = document.getElementById("app");
  app.innerHTML = /*HTML */ `
  <div>${Reklame()}</div>
    <div>${images()}</div>
    <div>${InfoBox()}</div>
    <div>${MenuSwitch()}</div>
    <div>${slideImageFunction()}</div>
    <div>${title()}</div>
    <div>${MenuSwitch()}</div>

  `;
  SlideShow(slideIndex); 
}


function MenuSwitch() {
  if (window.isloggedin == true) {
    return HomePageDropDownButtons(); // Return HTML for logged-in user
  } else {
    return dropdownmenu(); // Return HTML for non-logged-in user
  }
}



function title (){
return /*html*/  `
<h2 class="FrontPageTitle">Live Streaming Websites</h2>
`;  
}



function InfoBox() { 
  return /*HTML*/ `
    <div class="StreamingBox">
      <ul class="link"><a class="link2" href="#"></a></ul>
      <ul class="Description"></ul>
      <ul class="Price"></ul>
    </div>
  `;
}



function slideImageFunction() {
  return /*html*/ `
    <div class="slider">
      <div class="slides">
        <img class="imagess" src="/image/netflix.png" alt="Image 1">
        <img class="imagess" src="/image/popcorn.png" alt="Image 2">
        <img class="imagess" src="/image/hbo.png" alt="Image 3">
      </div>
      <button class="prev" onclick="ChangeSlide(-1)">&#10094;</button>
      <button class="next" onclick="ChangeSlide(1)">&#10095;</button>
    </div>
  `;
}





function SlideShow(n) {
  let i;
  const slides = document.getElementsByClassName("imagess");
  const streamingBox = document.querySelector(".StreamingBox");

  if (n > slides.length - 1) {
    slideIndex = 0
  }
  if (n < 0) {
    slideIndex = slides.length - 1
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  streamingBox.querySelector(".link2").textContent = websites[slideIndex];
  streamingBox.querySelector(".link a").href = websiteLinks[slideIndex];
  streamingBox.querySelector(".Description").textContent = description[slideIndex];
  streamingBox.querySelector(".Price").textContent = prices[slideIndex];




  if (n > 0) {
    slides[slideIndex].style.animationName = "slideInRight";
    streamingBox.style.animationName = "slideInRight"
  } 
  
  else {
    slides[slideIndex].style.animationName = "slideInLeft";
    streamingBox.style.animationName = "slideInLeft"
  }

  // Klone og erstatte boksen i DOM for å tvinge en "re-rendering" med animasjon
  const newStreamingBox = streamingBox.cloneNode(true);
  streamingBox.parentNode.replaceChild(newStreamingBox, streamingBox);
}

//variabler til informasjon boksen (infobox)
const websites = ["Netflix", "PopcornTime", "HBO"];
const websiteLinks = ["https://www.netflix.com", "https://popcorntimeonline.xyz", "https://www.hbomax.com"];
const description = ["Description:  Netflix is a leading global streaming service offering a wide variety of    TV shows, movies, documentaries   ","Description: Popcorn Time is a free, open-source streaming application that allows users to watch movies and TV shows via torrenting. It offers a user-friendly interface and a vast selection of content, including the latest releases.","Description: HBO is a premium cable and streaming network known for its high-quality original programming, including hit shows like Game of Thrones, Westworld, and Succession In addition to its extensive library of original series, HBO offers a wide range of movies, documentaries, and specials.",];
const prices = ["Price: $6.99 to $22.99 per month, depending on your subscription plan", "Price: plans range from $9.99 to $19.99 per month, though annual pricing is also available.", "Price: Free"];
let slideIndex = 0;


function ChangeSlide(n) {
  SlideShow((slideIndex += n));
}

function imagesBackground(){
  return /*HTML*/ `
  <img class="overskriftRamme" src="/image/cinemaScreen.webp">
        <img class="frontimage" src="/image/blacks.jpg" alt="">
        <img class="overskriftRamme" src="/image/cinemaScreen.webp">
        <img class="overskriftbilde1" src="/image/cinema.webp">
        <img class="overskriftbilde2" src="/image/family.jpg">
    `;
}



