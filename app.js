// Wait to run this code block until html content has loaded
addEventListener('DOMContentLoaded', () => {
})

//select all image elements except the center button
const images = document.querySelectorAll('img:not(.centerButton)')

//An array with names of images 
let source = ["coffee", "coffee", "coffee", "coffee", "diver", "diver", "diver", "diver", "fox", "fox", "fox", "fox", "mask", "mask", "mask", "mask", "penguin", "penguin", "penguin", "penguin", "picture", "picture", "picture", "picture"];

//An empty array to be populated by the following for loop
const cards = []

//A loop that iterates over all the images except the center button and creates an object with properties
for (let i = 0; i < images.length; i++) {
    
    //A variable that creates a random integer that gets smaller every time it selects an index from source
    const randomNumber = Math.floor(Math.random() * (23 - i))
    
    const card = {
        flipped: false,
        matched: false,
        name: source[randomNumber],
        position: `${i}`,
        element: images[i],
    }

    //When an index is selected it is removed from the list of possible choices for the rest of the for loop    
    source = source.slice(0, randomNumber).concat(source.slice(randomNumber+1, source.length))

    //Once the card object has been created add it to the cards array above
    cards.push(card);
}

const centerButton = document.querySelector('.centerButton')

//when the center button is clicked refresh the page
centerButton.addEventListener('click', (event) => {    
    document.location.reload()
})

let flippedCardCount = 0

//An event listener that waits for the user to click and executes the following code
for (let i = 0; i < images.length; i++) {
    const image = images.item(i)
    image.addEventListener('click', (event) => {
        
        //If a card that has already been matched gets cliked do nothing
        if (cards[i].matched === true) {
            return
        } //otherwise, if the clicked card's flipped property is false change it to true, change the image based on the card's name, and increment flippedCardCount
        else if (cards[i].flipped === false) {
            cards[i].flipped = true
            images[i].src = `images/${cards[i].name}.png`
            flippedCardCount++
        } 

        //If flippedCardCount reaches or exceeds 2 filter through and select the cards whose .flipped property is true
        if (flippedCardCount >= 2) {
            const flippedCards = cards.filter((card) => {
                return card.flipped === true 
            });

            //If the first and second index of the flippedCards array have name oroperties that are the same and position properties that are different
            //changed the matched property of both to true and the flipped property of both to false
            if (flippedCards[0].name === flippedCards[1].name && flippedCards[0].position != flippedCards[1].position) {
                flippedCards[0].matched = true;
                flippedCards[1].matched = true;
                flippedCards[0].flipped = false;
                flippedCards[1].flipped = false;
                //wait 1.5 seconds then direct both cards' source to the white image
                setTimeout(() => {
                    flippedCards[0].element.src = "images/white.png";
                    flippedCards[1].element.src = "images/white.png";
                }, 1500)
                
                //if they don't match change both cards flipped protperty to false
            } else {
                flippedCards[0].flipped = false 
                flippedCards[1].flipped = false
                //wait 1.5 seconds then direct the both cards' source to the white image
                setTimeout(() => {
                    flippedCards[0].element.src = "images/question.png";
                    flippedCards[1].element.src = "images/question.png";
                }, 1000) 
                
            }

            //whether or not they matched reset flippedCardCount to zero again
            flippedCardCount = 0
        }

        //A function to create an array with the number of matches
        const checkWin = cards.filter ((card) => {
        return card.matched === true
        });
        
        //defines the variable winCount to source the localStorage file
        let winCount = localStorage.getItem("winCount")
        
        //A variable to call the winMessage <p>aragraph under the game board
        const winMessage = document.querySelector('.winMessage')

        //If all the cards have been matched, display winMessage, increment winCount, and set localStorage wincount to the winCount value
        if (checkWin.length === 24) {
            winMessage.innerText = "You Won! Click the center button to play again!"
            winCount++
            localStorage.setItem("winCount", winCount)
        };
        //redefines winCount to the value in localStorage
        winCount = localStorage.getItem("winCount")
    }
)};


//A variable to call the winCountDisplay <p>aragraph under the game board
let winCountDisplay = document.querySelector('.winCountDisplay')

//Changes the empty element to show the win count
winCountDisplay.innerText = "Win Count: " + `${localStorage.getItem("winCount")}`

//Completed on 07/31/2023