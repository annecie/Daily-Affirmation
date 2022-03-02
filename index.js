
const affirmationItem = document.getElementById("affirmation-item")
const button = document.getElementById("button")
const giphyDiv = document.getElementById("random-gif");

// Fetch Api
const requestOptions = {
  method: "GET",
  headers: {
    "Accept": "application/json"
  }
};

button.addEventListener("click", () => {
    getAffirmation();
    displayAffirmation();
    getGiphy();
})

const getGiphy = () => {
  const url = "https://api.giphy.com/v1/stickers/random?api_key=lihApacEoXxEL3d4y1O8VBEWN8peBVcu&tag=positivity"
  fetch(url)
  .then(response => response.json())
  .then(console.log)
  .then(displayGiphy)
}

const getAffirmation = () => {
 fetch("https://www.affirmations.dev", requestOptions)
  .then(response => response.json())
  .then(displayAffirmation)
  .catch(error => console.log("error", error));
}

const displayAffirmation = (response) => {
  // affirmationItem.innerText = response.affirmation
}

const displayGiphy = (data) => {
  const giphy = document.createElement("img")
}
// const texts = document.querySelector(".text-bar");

// let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();
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
// recognition.addEventListener("end", () => {
//     recognition.start();
//   });
  
//   recognition.start();

