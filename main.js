const header = document.querySelector("header");
const h1 = document.querySelector("h1");
let image = true;
let title = true;


const changeImage = () => {
    image = !image;
    title = !title;
    header.style.backgroundImage = image ? "url(sw-001.jpg)" : "url(sw-002.jpg)";
    h1.textContent = title ? "Baloon" : "Dupa"
}

header.addEventListener("click", changeImage);