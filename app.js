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
            flippedCardCount++
        } 

        if (cards[i].flipped === true) {
            images[i].src = `images/${cards[i].name}.png`
        }

        if (cards[i].flipped === false) {
            images[i].src = "images/question.png"
        }

        if (flippedCardCount >= 2) {
            //Not sure how to use these yet...
            const flippedCards = cards.filter((card) => {
                return card.flipped === true 
            })

            console.log(flippedCards);

            if (flippedCards[0].name === flippedCards[1].name) {
                console.log("the cards matched")
                flippedCards[0].matched === true;
                flippedCards[1].matched === true;
                flippedCards[0].name = "blank.png";
                flippedCards[1].name = "blank.png";
            }
            //setTimeout(getFlippedCards(), 2000) //// want to pause the code for a moment so the player can visually see if the two cards match or not
            //getFlippedCards() //// and if name === name then change matched to === true
            // if (card[0].name === card[1].name) {
            //  card[0, 1].matched === true
            
            flippedCardCount = 0  //// resets the counter for when the code should check for matching cards

            }
        }
       
        // ... or instead, use the .filter() array function to isolate the flipped cards
        // see `delete me` section below.


    )};


// delete me
function callme() {
    const people = [
        {
            name: 'Dean',
            age: 27
        },
        {
            name: 'Jay',
            age: 22
        },
        {
            name: 'Ben',
            age: 20
        }
    ]

    // people.forEach((person) => {
    //     if (person.age >= 21) {
    //         console.log(person.name + ' is old enough to drink.')
    //     }
    // })

    peopleOver21 = people.filter((person) => {
        return person.age >= 21;
    })
    console.log(peopleOver21)


}

function sayWord(word) {
    console.log(word)
}

(word) => {
    console.log(word)
}

