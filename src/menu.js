function menu() {
    // The parent container.
    const infoContainer = document.getElementById("infoSection")

    // A div element to contain all menu information.
    const menuInfo = document.createElement("h4");
    menuInfo.id = "menuInfo";
    menuInfo.innerHTML = "Menu";
    infoContainer.appendChild(menuInfo);

    // Function creates titles for menu sections
    function createMenuHeader(id, className, parent, text) {
        let newEle = document.createElement("h5");
        newEle.id = id;
        newEle.className = className;
        parent.appendChild(newEle);
        newEle.innerHTML = text;
    }
    

    // Function creates a menu item.
    function createMenuItem(className, parent, text) {
        let newItem = document.createElement("p");
        newItem.className = className;
        parent.appendChild(newItem);
        newItem.innerHTML = text;
        newItem.style.fontWeight = 300;
    }
    
    // Menu tab section "Starters".
    createMenuHeader("starters", "menuSection", infoContainer, "Starters");
    let startersSection = document.getElementById("starters");

    // Starters section items.
    createMenuItem("foodItem", startersSection, 
    `-- Chicken Tenders -- $13</br>
    <em>Spiced to perfection</br>
    served with siracha slaw</em>.`
    );

    createMenuItem("foodItem", startersSection, 
    `-- Nachos -- $13</br>
    <em>Spiced to perfection</br>
    served with siracha slaw</em>.`
    );

    createMenuItem("foodItem", startersSection, 
    `-- Chicken Tenders -- $13</br>
    <em>Spiced to perfection</br>
    served with siracha slaw</em>.`
    );

}

export { menu }