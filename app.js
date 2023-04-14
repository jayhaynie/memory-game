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



const images = document.querySelectorAll('img')

const source = []

const cards = []

for (let i = 0; i < images.length; i++) {

    const card = {
        flipped: false,
        matched: false,
        name: "coffee",
        
    }
    
        

    cards.push(card);
}








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
