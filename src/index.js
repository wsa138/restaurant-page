
import { pageLoad } from './page-load'
import { menu } from './menu'
import { home } from './home'
import { about } from './about'

pageLoad();
home();

function highlightSelected(selected, non1, non2) {
    selected.style.textDecoration = "underline";
    non1.style.textDecoration = "none";
    non2.style.textDecoration = "none";
}

let homeBtn = document.getElementById("homeButton");
let menuBtn = document.getElementById("menuButton");
let aboutBtn = document.getElementById("aboutButton");


const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", function() {
    highlightSelected(homeBtn, menuBtn, aboutBtn)
    const myNode = document.getElementById("infoSection");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
   home();
});

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", function() {
    highlightSelected(menuBtn, homeBtn, aboutBtn)
    const myNode = document.getElementById("infoSection");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    menu();
});

const aboutButton = document.getElementById("aboutButton");
aboutButton.addEventListener("click", function() {
    highlightSelected(aboutBtn, menuBtn, homeBtn)
    const myNode = document.getElementById("infoSection");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    about();
});
