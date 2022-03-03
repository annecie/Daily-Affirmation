const affirmationItem = document.getElementById("affirmation")
const button = document.getElementById("button")
const affirmationContainer = document.getElementById("affirmation-container")
const img = document.getElementById("image")

const requestOptions = {
  method: "GET",
  headers: {
    "Accept": "application/json"
  }
};

button.addEventListener("click", () => {
    getAffirmation();
    getGiphy();
})

const getAffirmation = () => {
 fetch("https://www.affirmations.dev", requestOptions)
  .then(response => response.json())
  .then(displayAffirmation)
  .catch(error => console.log("error", error));
}

const displayAffirmation = (response) => {
  // console.log(response.affirmation)
  affirmationItem.innerText = response.affirmation
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
const speechButton = document.querySelector("#speech-button");

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.continuous = false;

speechButton.addEventListener("click", () => {
  console.log("start")
  recognition.start();

});

recognition.onresult = function(event) {
  console.log(event);
}

recognition.onspeechend = function() {
  console.log("end")
  recognition.stop();
}



// recognition.interimResults = true;

// let p = document.createElement("p");

// recognition.addEventListener("result", (e) => {
//   texts.appendChild(p);
//   const text = Array.from(e.results)
//     .map((result) => result[0])
//     .map((result) => result.transcript)
//     .join("");
//     p.innerText = text;
// });
// r
