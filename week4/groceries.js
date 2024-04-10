// When you type a grocery item into the text input and press [Enter]:
// - the new item should appear at the bottom of the list
// - the text input should be reset to a blank input field
// - the cursor should be blinking in the text input again

function setupListeners() {
  document.querySelector("form").addEventListener("submit", addItem)
}

document.addEventListener("DOMContentLoaded", setupListeners)

function addItem(e) {
  e.preventDefault();
  console.log(e);

  let textToAdd = document.querySelector("input").value
  
  let template = document.querySelector("#new-item-template")
  let newItem = template.content.cloneNode(true)
  // let newItem = document.createElement("li")
  newItem.querySelector("li").textContent = textToAdd
  let ul = document.querySelector("#groceries")
  ul.appendChild(newItem)

  document.querySelector("input").value = ""


}
