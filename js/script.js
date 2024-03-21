console.log("Hello I am trying my best I swear");
// nav
let openHam = document.getElementById("openHam");
let closeHam = document.getElementById("closeHam")
let navigationItems = document.getElementById("navigation-items");

// Arrow Function with arguments & parameters

const hamburgerEvent = (navigation, close , open )=> {
    navigationItems.style.display = navigation;
    closeHam.style.display = close
    openHam.style.display = open
};
// Add function to click events with the correct parameters

openHam.addEventListener("click", ()=> hamburgerEvent("flex","block","none"));
closeHam.addEventListener("click", ()=> hamburgerEvent("none","none","block"));
// end of nav

