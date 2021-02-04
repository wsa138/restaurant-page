function pageLoad() {
    // Main page div element
    const mainContainer = document.getElementById("content");

    function makeElement(id, type, parentEle) {
        let tempEle = document.createElement(type);
        tempEle.id = id;
        parentEle.appendChild(tempEle)
    }

    function makeElementText(id, type, parentEle, text) {
        let tempTextEle = document.createElement(type);
        tempTextEle.id = id;
        tempTextEle.innerHTML = text;
        parentEle.appendChild(tempTextEle);
    }

    // Header element
    makeElement("pageHeader", "header", mainContainer);
    let pageHeader = document.getElementById("pageHeader")

    // Information section element.
    makeElement("infoSection", "section", mainContainer);

    // Footer element.
    makeElement("pageFooter", "footer", mainContainer);
    let pageFooter = document.getElementById("pageFooter");

    // Restaurant name element for header.
    makeElementText("name", "h1", pageHeader, "My Restaurant");

    // Hours title element for footer
    makeElementText("hoursTitle", "h3", pageFooter, "Hours");
    
    // Hours Text
    makeElementText("hoursText", "p", pageFooter,
        `Tues - Sat: 11:30 am - 10:00 pm </br>
        Sunday: 3:00 pm - 9:30 pm</br>
        Monday: Closed`);

    // Contact title for footer
    makeElementText("contactTitle", "h3", pageFooter, "Contact");
    
    // Contact text
    makeElementText("contactText", "p", pageFooter,
        `914-555-5555</br>
        inro@myrestaurant.com</br>
        724 Cambridge Place, Faketown, PA`)

    // Nav bar
    makeElement("navTabs", "nav", pageHeader);
    let navBar = document.getElementById("navTabs");

    // Nav bar buttons list
    const navList = document.createElement("ul");
    navList.id = "navList";
    navBar.appendChild(navList);
    
    // Home button
    makeElementText("homeButton", "li", navList, "<a>Home</a>");
    document.getElementById("homeButton").className = "navBtn";

    // Menu button
    makeElementText("menuButton", "li", navList, "<a>Menu</a>");
    document.getElementById("menuButton").className = "navBtn";

    // About button
    makeElementText("aboutButton", "li", navList, "<a>About</a>");
    document.getElementById("aboutButton").className = "navBtn";

}



export { pageLoad }