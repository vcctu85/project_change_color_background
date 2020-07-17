// These are our HTML elements
const button = document.querySelector('button')
const body = document.querySelector('body')

// 1. Create an array named colors that holds strings of colors


// Initialize a backgroundColor here
body.style.backgroundColor = 'violet'

// 2. call addEventListener on button


// This is the function that sets the backgroundColor to a random color
function changeBackground(){
    // This selects a random number between 0 and length of the colors array
    let colorIndex = parseInt(Math.random() * colors.length)

    // 3. Set the backgroundColor to the color at 'colorIndex' of the colors array
}
