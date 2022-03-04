const affirmationItem = document.getElementById("affirmation")
const button = document.getElementById("button")
const affirmationContainer = document.getElementById("affirmation-container")
const img = document.getElementById("image")
const musicButton = document.getElementById("music")
const instructionContainer = document.getElementById("ins")

const audioButtonOne = document.getElementById("audio-button-one")
const audioButtonTwo = document.getElementById("audio-button-two")
const audioButtonThree = document.getElementById("audio-button-three")

const audio1 = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")

let clicked1 = false;
let clicked2 = false;
let clicked3 = false;

musicButton.addEventListener("click", () => {
  if (audio1.paused){
    if(clicked1 == true){
      audio1.play();
    }
    if (audio2.paused){
      if(clicked2 == true){
        audio2.play();
      }
    }
      if (audio3.paused){
        if(clicked2 == true){
          audio3.play();
        }
  } 
}
if(audio1.play){
  if(clicked1 == true){
    audio1.pause();
  }
}
if(audio2.play){
  if(clicked2 == true){
    audio2.pause();
  }
}
if(audio3.play){
  if(clicked3 == true){
    audio3.pause();
  }
}
});

audioButtonOne.addEventListener("click", () => {
  clicked1 = true;
  audio1.volume = 0.2;
  audio1.play()
})

audioButtonTwo.addEventListener("click", () => {
  clicked2 = true;
  audio2.volume = 0.2;
  audio2.play()
})

audioButtonThree.addEventListener("click", () => {
  clicked3 = true;
  audio3.volume = 0.2;
  audio3.play()
})

const requestOptions = {
  method: "GET",
  headers: {
    "Accept": "application/json"
  }
};

button.addEventListener("click", () => {
    speechButton.disabled = "true";
    instructionContainer.style.display = "none";
    affirmationContainer.style.display = "block";
    getAffirmation();
    getGiphy();
})

const getAffirmation = () => {
 fetch("https://www.affirmations.dev", requestOptions)
  .then(response => response.json())
  .then(displayAffirmation)
  .catch(error => console.log("error", error));
}

let text = document.getElementById("text")

const displayAffirmation = (response) => {
  // console.log(response.affirmation)
  text.innerText = response.affirmation
  // affirmationItem.innerText = response.affirmation
}

const getGiphy = () => {
  let url = "https://api.giphy.com/v1/stickers/random?api_key=lihApacEoXxEL3d4y1O8VBEWN8peBVcu&tag=positivity"
  fetch(url)
  .then(response => response.json())
  .then(displayGiphy)
}

const displayGiphy = (content) => {
  // console.log(content.data.images.original.url)
  // const img = document.createElement("img")
  img.src = content.data.images.original.url
  affirmationContainer.append(img)
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const speechButton = document.getElementById("speech-button");
const speechResult = document.getElementById("speech-result");
let speechItem = document.createElement("p")

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.continuous = false;

speechButton.addEventListener("click", () => {
  console.log("start")
  recognition.start();
});

recognition.onresult = function(event) {
  // console.log(event.results[0][0].transcipt)
  speechItem = event.results[0][0].transcript
  if(speechItem === "get affirmation" || "affirmation"){
    console.log("affirmation success")
    getAffirmation();
    getGiphy();
  }
  if(speechItem.includes("Open Spotify")){
    window.open("https://open.spotify.com/")
  }
}

recognition.onspeechend = function() {
  console.log("end")
  recognition.stop();
}

let textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml16 .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.ml16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });