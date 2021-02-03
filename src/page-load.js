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

}

export { pageLoad }