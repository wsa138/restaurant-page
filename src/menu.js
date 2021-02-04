function menu() {
    // The parent container.
    const infoContainer = document.getElementById("infoSection")

    // A div element to contain all menu information.
    const menuInfo = document.createElement("div");
    menuInfo.id = "menuInfo";
    menuInfo.innerHTML = "This is the menu";
    infoContainer.appendChild(menuInfo);
}

export { menu }