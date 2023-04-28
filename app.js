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
        
        if (cards[i].flipped === false) {
            console.log(`flipped is now ${cards[i].flipped} for image ${i}`)
            cards[i].flipped = true
            console.log(`flipped is now ${cards[i].flipped} for image ${i}`)
        }

        if (cards[i].flipped === true) {
            images[i].src = `images/${cards[i].name}.png`  
        }


    });
}
















/// ignore me for now
// const cards = [
//     // {
//     //     flipped: false,
//     //     matched: false,
//     //     name: "coffee",
//     // },
//     // {
//     //     flipped: false,
//     //     matched: false,
//     //     name: "coffee",
//     // },
// ]
