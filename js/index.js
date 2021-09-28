// ============================================================
// * `mouseover`
const heading = document.querySelector('.logo-heading');
heading.addEventListener('mouseover', event => {
    console.log(event.type);
    heading.style.color = 'red'; 
})


// ============================================================
// * `keydown`

function escKey(event) {
    if (event.key === 'Escape'){
        heading.style.color = 'black'; 
        
        headerImg.style.display = 'initial';
        // headerImg.style.display = 'revert';
        
        mainNav.style.backgroundColor = 'white';
        welcomeHeading.textContent = 'Welcome To Fun Bus!'
        console.log(event.type);
    }
}
document.addEventListener('keydown', escKey);


// ============================================================
// * `wheel`

const headerImg = document.querySelector('.intro img');

function hideFunBus (event){
    console.log(event.type);
    headerImg.style.display = 'none';
}

document.addEventListener('wheel', hideFunBus)


// ============================================================
// * `load`

window.addEventListener('load', (event) => {
    console.log('The page is done loading, now eat bologna');
  });


// ============================================================
// * `focus`
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('focus', function(event) {
        link.style.color = 'purple';
        link.style.fontSize = '40px';
    })
})


// ============================================================
// * `resize`
const mainNav = document.querySelector('.main-navigation');
window.addEventListener('resize', changeMain)
function changeMain (){
    mainNav.style.backgroundColor = 'yellow';
}


// ============================================================
// * `scroll`

// Reuse mainNav var above  
document.addEventListener('wheel', event => {
    mainNav.style.backgroundColor = 'orange';
})


// ============================================================
// * `select`

// Following from MDN example
const textSelect = document.querySelector('input');
textSelect.addEventListener('select', event => {
    textSelect.style.color = 'green';
})

// DOESNT WORK
// const welcomeText = document.querySelector('.intro p');
// console.log(welcomeText);
// welcomeText.addEventListener('select', element => {
//     welcomeText.style.color = 'red';
// })


// ============================================================
// * `dblclick`
const welcomeHeading = document.querySelector('.intro h2');
welcomeHeading.addEventListener('dblclick', event => {
    welcomeHeading.textContent = 'YOU CHANGED ME!!! HELP!'

})


// ============================================================
// * `drag / drop`
// * Blur instead

navLinks.forEach(link => {
    link.addEventListener('blur', function(event) {
        link.style.color = 'blue'
        link.style.fontSize = '1rem';
    })
})


// ============================================================
// * Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.


// ============================================================
// * Stop the navigation items from refreshing the page by using `preventDefault()`