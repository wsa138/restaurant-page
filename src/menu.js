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
    
    // Starters section.
    createMenuHeader("starters", "menuSection", infoContainer, "Starters");
    let startersSection = document.getElementById("starters");

    // Starters section items.
    createMenuItem("foodItem", startersSection, 
        `-- Chicken Tenders -- $13</br>
        <em>Spiced to perfection</br>
        served with siracha slaw.</em>`
    );

    createMenuItem("foodItem", startersSection, 
        `-- Nachos -- $11/15</br>
        <em>Add chicken, pork or chili.</em>`
    );

    createMenuItem("foodItem", startersSection, 
        `-- Wings -- $9</br>
        <em>Buffalo, garlic parm, mango habanero</br>
        siracha agave, BBQ, Nashville.</em>`
    );

    // Salads section.
    createMenuHeader("salads", "menuSection", infoContainer, "Salads");
    let saladsSection = document.getElementById("salads")

    // Salads section items.
    createMenuItem("foodItem", saladsSection, 
        `-- Ceasar Salad -- $11</br>
        <em>Romaine tossed with Ceasar dressing</br>
        topped with parmesean and herbed croutons.</em>`)

    createMenuItem("foodItem", saladsSection, 
        `-- Cobb Salad -- $15</br>
        <em>Romaine, diced tomato, crumbled blue cheese</br>
        bacon bits, chopped egg, avacado, grilled chicken.</em>`)

    // Entrees section.
    createMenuHeader("entrees", "menuSection", infoContainer, "Entrees")
    let entreesSection = document.getElementById("entrees");

    // Entrees section items.
    createMenuItem("foodItem", entreesSection, 
        `-- Beef Bolognese -- $16</br>
        <em>Pepperdelle, ground sirloin, parmesean</br>
        side of bread.</em>`)

    createMenuItem("foodItem", entreesSection, 
        `-- NY Strip -- $26</br>
        <em>Prime cut beef, crispy onions</br>
        choice of two sides.</em>`)

    createMenuItem("foodItem", entreesSection, 
        `-- Penne Alla Vodka -- $15</br>
        <em>Chicken +3 / Shrimp +5.</em>`)

    // Sides section.
    createMenuHeader("sides", "menuSection", infoContainer, "Sides");
    let sidesSection = document.getElementById("sides");

    // Sides section item.
    createMenuItem("foodItem", sidesSection,
        `-- Sauteed Spinach --`)

    createMenuItem("foodItem", sidesSection,
        `-- Mashed Potatoes --`)

    createMenuItem("foodItem", sidesSection,
        `-- Steamed Broccoli --`)
        
    createMenuItem("foodItem", sidesSection,
        `-- Coleslaw --`)

    createMenuItem("foodItem", sidesSection,
        `-- Brussel Sprouts --`)

    createMenuItem("foodItem", sidesSection,
        `-- Rice --`)




}

export { menu }