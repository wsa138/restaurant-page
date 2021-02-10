function about() {
    // The parent container.
    const infoContainer = document.getElementById("infoSection")

    // A div element to contain all menu information.
    const about = document.createElement("h4");
    about.id = "aboutContainer";
    about.innerHTML = "About";
    infoContainer.appendChild(about);


    // About section information.
    let aboutInfo = document.createElement("p");
    aboutInfo.id = "aboutInfo";
    infoContainer.appendChild(aboutInfo);
    aboutInfo.innerHTML = 
        `A local hotspot for over 15 years, specializing in great
        food and a friendly atmosphere. This restaurant is located one
        minute form the Metro North train station. A great resting spot 
        after a long day, or a pleasant getaway for a night out. With 
        new specials and tasty cocktails that change weekly, there will 
        always be something new to try. So come stop by, and experience a 
        the best that Westchester has to offer. `

}

export { about }