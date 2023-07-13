// Wait to run this code block until html content has loaded
addEventListener('DOMContentLoaded', () => {
    
})

//////////////////////////////////
//  examples and stuff
//////////////////////////////////



const images = document.querySelectorAll('img:not(.centerButton)')

let source = ["coffee", "coffee", "coffee", "coffee", "diver", "diver", "diver", "diver", "fox", "fox", "fox", "fox", "mask", "mask", "mask", "mask", "penguin", "penguin", "penguin", "penguin", "picture", "picture", "picture", "picture"];

const cards = []

for (let i = 0; i < images.length; i++) {
    
    const randomNumber = Math.floor(Math.random() * (23 - i))
    
    const card = {
        flipped: false,
        matched: false,
        name: source[randomNumber],
        position: `${i}`,
    }
    
        
    source = source.slice(0, randomNumber).concat(source.slice(randomNumber+1, source.length))

    cards.push(card);
}

const centerButton = document.querySelector('.centerButton')

centerButton.addEventListener('click', (event) => {    
    document.location.reload()
})

flippedCardCount = 0





// middle - loop condition

for (let i = 0; i < images.length; i++) {
    const image = images.item(i)
    image.addEventListener('click', (event) => {
        
        if (cards[i].matched === true) {
            return
        }
        else if (cards[i].flipped === false) {
            cards[i].flipped = true
            images[i].src = `images/${cards[i].name}.png`
            flippedCardCount++
        } 

        if (flippedCardCount >= 2) {
            const flippedCards = cards.filter((card) => {
                return card.flipped === true 
            })

            console.log(flippedCards);

            if (flippedCards[0].name === flippedCards[1].name && flippedCards[0].position != flippedCards[1].position) {
                console.log("the cards matched")
                flippedCards[0].matched === true;
                flippedCards[1].matched === true;
                flippedCards[0].name = "blank.png";//these don't change the image on the button
                flippedCards[1].name = "blank.png";
            } else {
                flippedCards[0].flipped = false 
                flippedCards[1].flipped = false
            }

            flippedCardCount = 0  //// resets the counter for when the code should check for matching cards

        }
    }
)};


