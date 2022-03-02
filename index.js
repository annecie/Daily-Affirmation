
const affirmationItem = document.getElementById("affirmation-item")
const button = document.getElementById("button")

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

