
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

    // Function creates item name.
    function createItemName(className, text) {
        let newName = document.createElement("h5");
        newName.className = className;
        infoContainer.appendChild(newName);
        newName.innerHTML = text;
    }
    

    // Function creates an item description.
    function createMenuItem(className, parent, text) {
        let newItem = document.createElement("p");
        newItem.className = className;
        parent.appendChild(newItem);
        newItem.innerHTML = text;
        newItem.style.fontWeight = 300;
    }
    
    // Starters section.
    createMenuHeader("starters", "menuSection", infoContainer, "Starters");
    let startersSection = document.getElementById("starters");

    // Starters section items.
    createItemName("itemName", "-- Chicken Tenders -- $13");

    createMenuItem("foodItem", infoContainer, 
        `<em>Spiced to perfection</br>
        served with siracha slaw.</em>`
    );

    createItemName("itemName", "-- Nachos -- $11/15");

    createMenuItem("foodItem", infoContainer, 
        `<em>Add chicken, pork or chili.</em>`
    );

    createItemName("itemName", "-- Wings -- $9");

    createMenuItem("foodItem", infoContainer, 
        `<em>Buffalo, garlic parm, mango habanero</br>
        siracha agave, BBQ, Nashville.</em>`
    );

    // Salads section.
    createMenuHeader("salads", "menuSection", infoContainer, "Salads");
    let saladsSection = document.getElementById("salads")

    // Salads section items.

    createItemName("itemName", "-- Ceasar Salad -- $11");
    
    createMenuItem("foodItem", infoContainer, 
        `<em>Romaine tossed with Ceasar dressing</br>
        topped with parmesean and herbed croutons.</em>`)

    createItemName("itemName", "-- Cobb Salad -- $15");

    createMenuItem("foodItem", infoContainer, 
        `<em>Romaine, diced tomato, crumbled blue cheese</br>
        bacon bits, chopped egg, avacado, grilled chicken.</em>`)

    // Entrees section.
    createMenuHeader("entrees", "menuSection", infoContainer, "Entrees")
    let entreesSection = document.getElementById("entrees");

    // Entrees section items.
    createItemName("itemName", "-- Beef Bolognese -- $16");

    createMenuItem("foodItem", infoContainer, 
        `<em>Pepperdelle, ground sirloin, parmesean</br>
        side of bread.</em>`)

    createItemName("itemName", "-- NY Strip -- $26");

    createMenuItem("foodItem", infoContainer, 
        `<em>Prime cut beef, crispy onions</br>
        choice of two sides.</em>`)

    createItemName("itemName", "-- Penne Alla Vodka -- $15");

    createMenuItem("foodItem", infoContainer, 
        `<em>Chicken +3 / Shrimp +5.</em>`)

    // Sides section.
    createMenuHeader("sides", "menuSection", infoContainer, "Sides");
    let sidesSection = document.getElementById("sides");

    // Sides section item.
    createMenuItem("foodItem", infoContainer,
        `-- Sauteed Spinach --`)

    createMenuItem("foodItem", infoContainer,
        `-- Mashed Potatoes --`)

    createMenuItem("foodItem", infoContainer,
        `-- Steamed Broccoli --`)
        
    createMenuItem("foodItem", infoContainer,
        `-- Coleslaw --`)

    createMenuItem("foodItem", infoContainer,
        `-- Brussel Sprouts --`)

    createMenuItem("foodItem", infoContainer,
        `-- Rice --`)




}

export { menu }