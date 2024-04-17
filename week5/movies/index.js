// numberOfLikes = 0 //global to the file
// window.numberOfLikes = 0
window.app = {
    numberOfLikes: 0
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".like").forEach( (link) => { link.addEventListener('click', (event) => {
        console.log("Clicked on a heart!")
        const link = event.currentTarget; // let user know at this moment this event is happening
        const counterElement = link.querySelector("span") // already in a element, go into its span section
        // both counterElement.textContent and counterElement.innerText will give the text
        // let counterValue = parseInt(counterElement.textContent)
        // counterValue += 1
        window.app.numberOfLikes += 1
        counterElement.textContent = window.app.numberOfLikes
        // However, this means the data itself, number of likes, is stored in html instead of a database
    }) } )
})

