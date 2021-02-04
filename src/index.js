
import { pageLoad } from './page-load'
import { menu } from './menu'
import { home } from './home'

pageLoad();

const menuButton = document.getElementById("menuButton");
menuButton.addEventListener("click", function() {
    const myNode = document.getElementById("infoSection");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    menu();
});

const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", function() {
   home();
})
