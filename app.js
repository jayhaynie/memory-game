// Wait to run this code block until html content has loaded
addEventListener('DOMContentLoaded', () => {
    console.log('hello from content loaded')
})

// addEventListener('click', (event) => {
//     console.log('Hello from the click event');
//     console.log('event was ', event);
// });

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





// middle - loop condition

for (let i = 0; i < images.length; i++) {
    const image = images.item(i)
    image.addEventListener('click', (event) => {
        
        if (cards[i].matched === true) {
            //do nothing
        }
        else if (cards[i].flipped === false) {
            // console.log(`flipped is now ${cards[i].flipped} for image ${i}`)
            cards[i].flipped = true
        } 

        if (cards[i].flipped === true) {
            images[i].src = `images/${cards[i].name}.png`
        }

        if (cards[i].flipped === false) {
            images[i].src = "images/question.png"
        }

        // check if 1 or 2 cards are currently flipped
        let flippedCardCount = 0
        const flippedCards = []
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].flipped === true) {
                flippedCardCount++
                flippedCards.push(cards[i])
            }
        }

        // if 2 or more cards are flipped
        if (flippedCardCount >= 2) {
            
        }
       
       
        // ... or instead, use the .filter() array function to isolate the flipped cards
        // see `delete me` section below.


    });
}


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

