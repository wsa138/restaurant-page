
import { pageLoad } from './page-load'
import { menu } from './menu'
import { home } from './home'
import { about } from './about'

pageLoad();


const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", function() {
    const myNode = document.getElementById("infoSection");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
   home();
});

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", function() {
    const myNode = document.getElementById("infoSection");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    menu();
});

const aboutButton = document.getElementById("aboutButton");
aboutButton.addEventListener("click", function() {
    const myNode = document.getElementById("infoSection");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    about();
});
