// Wait to run this code block until html content has loaded
addEventListener('DOMContentLoaded', () => {
    console.log('hello from content loaded');
})

addEventListener('click', (event) => {
    console.log('Hello from the click event');
    console.log('event was ', event);
});

//////////////////////////////////
//  examples and stuff
//////////////////////////////////

// Function
function deansSuperAwesomeFunction() {
    console.log('hi my name is Dean')
}

deansSuperAwesomeFunction()


const images = document.querySelectorAll('img');
console.log(images);

// middle - loop condition

for (let i = 0; i < images.length; i++) {
    console.log(i);
    const image = images.item(i)
    console.log(image);
    image.addEventListener('click', (event) => {
        console.log(`Hello from element ${i}`);
        console.log('event was ', event);
    });
}