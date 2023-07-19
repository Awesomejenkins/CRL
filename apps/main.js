const navToggle = document.querySelector('.nav__dropdown');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

const buttons = document.querySelectorAll("button");

//create for each that will apply function on buttons//
buttons.forEach((button) => {
    //add click event//
    button.addEventListener("click", () => {
        const currentState = button.getAttribute("data-state");
        //set condition in if else statement, if there is no currentState or currentState is set to closed => run //
        if (!currentState || currentState === "closed"){
            button.setAttribute("data-state", "opened");
            button.setAttribute("aria-expanded", "true");
        } else {
            button.setAttribute("data-state", "closed");
            button.setAttribute("aria-expanded", "false");
        }
    })

})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}