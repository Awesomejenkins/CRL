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