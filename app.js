const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Targeting our classes from index.html file
const btn = document.getElementById("btn");
const color = document.querySelector(".color")

// Everytime you click on button, the background color changes
btn.addEventListener("click", () => {
    // get a random number between 0 - 3 (colors[0], colors[1], etc.)
    const randomNumber = getRandomNumber()
    // console logging the number were getting
    console.log(randomNumber)
    // targeting the body and changing the value for the background colors
    document.body.style.backgroundColor = colors[randomNumber]
    // select the color and display the hex color name
    color.textContent = colors[randomNumber]
})

// a fucntion that generates a random number from the colors array
const getRandomNumber = () => {
    // multyiplying the random number were getting by colors.length (4)
    // using math.floor method will round down to the closest integer (1)
    return Math.floor(Math.random() * colors.length)
}