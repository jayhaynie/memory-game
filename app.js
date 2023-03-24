// Wait to run this code block until html content has loaded
addEventListener('DOMContentLoaded', () => {
    console.log('hello from content loaded');
})

// addEventListener('click', (event) => {
//     console.log('Hello from the click event');
//     console.log('event was ', event);
// });

//////////////////////////////////
//  examples and stuff
//////////////////////////////////


const images = document.querySelectorAll('img');

const cards = [
    {
        flipped: false,
        matched: false,
        name: "coffee",
    },
    {
        flipped: false,
        matched: false,
        name: "coffee",
    },
]
    

// middle - loop condition

for (let i = 0; i < images.length; i++) {
    const image = images.item(i)
    image.addEventListener('click', (event) => {
        
        if (cards[0].flipped === false) {
            console.log(`flipped is now ${cards[0].flipped}`)
            cards[0].flipped = true
            console.log(`flipped is now ${cards[0].flipped}`)
        }
    });
}


/**
 * Dean's = vs == vs === sidebar
 * 
 *  = (single) is the assignment operator
 *          this is an action
 * 
 *  == (double) is the loose equality operator
 *  === (triple) is the strict equality operator
 *          these two are checks
 * 
 * true == true
 * true
 * 
 * 
 * true == false
 * false
 * 
 * false == false
 * true
 * 
 * false == true
 * false
 * 
 * 
 * == vs === 
 * 1 == true
 * true
 * 
 * 'true' == true
 * true
 * 
 * 
 * 1 === true
 * false
 * 
 * 'true' === true
 * false
 */
