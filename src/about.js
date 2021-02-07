function about() {
    // The parent container.
    const infoContainer = document.getElementById("infoSection")

    // A div element to contain all menu information.
    const aboutInfo = document.createElement("div");
    aboutInfo.id = "aboutInfo";
    aboutInfo.innerHTML = "About";
    infoContainer.appendChild(aboutInfo);
}

export { about }