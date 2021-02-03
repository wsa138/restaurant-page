function pageLoad() {
    const mainContainer = document.getElementById("content");

    const restaurantTitle = document.createElement("h1");
    restaurantTitle.id = "restaurantTitle";
    restaurantTitle.innerHTML = "The Cantina";
    mainContainer.appendChild(restaurantTitle);

    const quickAbout = document.createElement("p");
    quickAbout.id = "quickAbout";
    quickAbout.innerHTML = "The best food and drinks this side of the galaxy";
    mainContainer.appendChild(quickAbout);

    const restaurantImage = document.createElement("img");
    restaurantImage.src = "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/630/354/75/dam/disneyland/destinations/disneyland/star-wars-galaxys-edge/photography/ogas-cantina-16x9.jpg?1591980523666";
    mainContainer.appendChild(restaurantImage);
}

export { pageLoad }