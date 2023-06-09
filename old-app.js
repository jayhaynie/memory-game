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

let cardsId = [];

let cardsSelected = [];

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
            
        cardsId.push(cards[i].position)
        cardsSelected.push(cards[i].name);
        let firstCard = cardsId[0];
        let secondCard = cardsId[1];
            
        if (cardsSelected[0] === cardsSelected[1] && firstCard != secondCard) {
            //currently clicked card will change to matched, but the first clicked card wouldn't 
            cards[i].matched = true;
            images[i].src = "images/white.png"
        } 
        else if (firstCard != secondCard && cardsSelected.length > 1) {
            // trying to make the cards flip back to question marks if they're not matched and only on the second click
            firstCard.images.src = "images/question.png"
            secondCard.images.src = "images/question.png"
        }
        
        // clears cardsId and CardsSelected arrays every second click after chacking if they match
        if (cardsSelected.length > 1) {
            cardsId = [];
            cardsSelected = [];
        }
    });
}




// checkForMatch function

// function checkForMatch() { 
//     let imgs = document.querySelectorAll("img"); 
//     let firstCard = cardsId[0];
//     let secondCard = cardsId[1];
//     if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
//     alert("you have found a match"); 
//     cardsWon += 1; 
//     scoreBoard.innerHTML = cardsWon; 
//     setTimeout(checkWon,500) 
//     } else { 
//     imgs[firstCard].setAttribute("src", "blank.png");
//     imgs[secondCard].setAttribute("src", "blank.png"); alert("wrong, please try again"); imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
//     } 
//     cardsSelected = []; 
//     cardsId = []; 
//     clicks += 1; 
//     clickBoard.innerHTML = clicks; 
//     }
    
//     function checkWon() {
//     if (cardsWon == cardArray.length / 2) {
//     alert("You won") 
//     setTimeout(()=> popup.style.display = "flex" ,300); 
//     }
//     }


//     function flipCard() { 
//         let selected = this.dataset.id;
//         cardsSelected.push(cardArray[selected].name); 
//         cardsId.push(selected); 
//         this.classList.add("flip"); 
//         this.setAttribute("src", cardArray[selected].img); 
//         if (cardsId.length === 2) { 
//         setTimeout(checkForMatch, 500);
//         } 
//         }








