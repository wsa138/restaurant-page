function home() {
    // The parent container.
    const infoContainer = document.getElementById("infoSection")

    // A div element to contain all menu information.
    const homeInfo = document.createElement("div");
    homeInfo.id = "homeInfo";
    homeInfo.innerHTML = "Home";
    infoContainer.appendChild(homeInfo);
}

export { home }