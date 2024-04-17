// This is a helpful function to generate a random number from 1 to 6
const pickRandomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// Your code goes here...
function onDocumentLoaded() {
  // console.log("Document loaded")
  const link = document.querySelector("main a")
  link.addEventListener("click", rollTheDice)
}

function rollTheDice(event) {
  event.preventDefault(); // without it will very quickly reload the page to default from dice.html
  let n1 = pickRandomNumber()
  let n2 = pickRandomNumber()
  let images = document.querySelectorAll("#dice img")
  images[0].src = "images/" + n1 + ".png" //javascript allow automatic cast so can combine strings
  images[1].src = "images/" + n2 + ".png"
}

document.addEventListener("DOMContentLoaded", onDocumentLoaded) //after DOM establish and before visual


