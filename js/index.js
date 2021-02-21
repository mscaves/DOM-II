// Your code goes here
let welcomeText = document.querySelector('.intro h2')
welcomeText.addEventListener("click", () => {
    welcomeText.textContent = 'Goodbye from the fun bus!';
})

let navSelector = document.querySelector('.container.nav-container');
navSelector.addEventListener("mouseover", () => {
    navSelector.style.color = 'pink';
})

let subTitle = document.querySelector('.text-content h2');
window.addEventListener("keydown", () => {
    subTitle.textContent = "I SAW THAT.";
})

let destinationPanel = document.querySelector(".destination");
destinationPanel.addEventListener("dblclick", () => {
    destinationPanel.style.color = "purple";
})

let header = document.querySelector('body header');
header.addEventListener("dblclick", () => {
    header.style.backgroundColor = 'purple';
})

let headerNav = document.querySelector('body header .nav');
headerNav.addEventListener('dblclick', () => {
    headerNav.stopPropogation();
    headerNav.style.transform = "Scale(1.2)";
    headerNav.style.transition = 'all 0.3s';
})