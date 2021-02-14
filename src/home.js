function home() {
    // The parent container.
    const infoContainer = document.getElementById("infoSection")

    // Home page mission statement
    let missionStatement = document.createElement("h4")
    missionStatement.id = "missionStatement";
    infoContainer.appendChild(missionStatement);
    missionStatement.innerHTML = `Great Food, Great Drinks, Great Times`
}

export { home }