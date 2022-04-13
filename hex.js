// 15 values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025 - hex colors start with a hashtag "#" and consist of 6 values, 
// values between (numbers) 0 - 9 and (letters) A - F
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

// setup a loop that will generate hex color, target the body, change the color of the bg, 
// and add the value with the colors span
btn.addEventListener("click", () => {
    // hex value will equal to the # because thats what the hex color starts with, a var that holds the hashtag
    let hexColor = "#"
    // loop that runs 6 times because of the required amt of values for the hex color
    // run the loop until i is less than 6 (0 - 5), so 6 times
    for (let i = 0; i < 6; i++) {
        // add a random value to the array, if its just "=" then were just overwriting in each iteration
        hexColor += hex[getRandomNumber()]
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}