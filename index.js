const affirmationItem = document.getElementById("affirmation-item")
const button = document.getElementById("button")

// Fetch Api
const requestOptions = {
  method: "GET",
  headers: {
    "Accept": "application/json"
  }
};

// const affirmation = fetch("https://www.affirmations.dev", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result.affirmation))
//   .catch(error => console.log("error", error));
// console.log(affirmation)

// Display Affirmation on screen
// button.addEventListener("click", () => {
//   const affirmation = fetch("https://www.affirmations.dev", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result.affirmation))
//   .catch(error => console.log("error", error));

//   const displayAffirmation = (affirmation) => {
//     affirmationItem.append = affirmation;
//   }
// })

// .then(result => console.log(result.affirmation))


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