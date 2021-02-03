function pageLoad() {
    // Main page div element
    const mainContainer = document.getElementById("content");

    //  Header element.
    const header = document.createElement("header");
    header.id = "pageHeader";
    mainContainer.appendChild(header);


    // Information section element
    const infoSection = document.createElement("section");
    infoSection.id = "infoSection";
    mainContainer.appendChild(infoSection);

    // Footer element.
    const footer = document.createElement("footer");
    footer.id = "pageFooter";
    mainContainer.appendChild(footer);

    // Restaurant name element for header.
    const name = document.createElement("h1");
    name.id = "name";
    name.innerHTML = "My Restaurant";
    header.appendChild(name);

    // Hours title element for footer
    const hoursTitle = document.createElement("h3");
    hoursTitle.id = "hoursTitle";
    hoursTitle.innerHTML = "Hours";
    footer.appendChild(hoursTitle);

    // Hours text
    const hoursText = document.createElement("p");
    hoursText.id = "hoursText";
    hoursText.innerHTML = `Tues - Sat: 11:30 am - 10:00 pm </br>
        Sunday: 3:00 pm - 9:30 pm</br>
        Monday: Closed`;
    footer.appendChild(hoursText);

    // Contact title for footer
    const contactTitle = document.createElement("h3");
    contactTitle.id = "contactTitle"
    contactTitle.innerHTML = "Contact"
    footer.appendChild(contactTitle);

    // Contact text
    const contactText = document.createElement("p");
    contactText.id = "contactText";
    contactText.innerHTML = `914-555-5555</br>
        inro@myrestaurant.com</br>
        724 Cambridge Place, Faketown, PA`
    footer.appendChild(contactText);

}

export { pageLoad }