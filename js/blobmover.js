
const container = document.querySelector(".me-wrapper");

const root = document.querySelector(":root")
let inText = false

container.onmousemove = e =>{
    let x = e.clientX - container.getBoundingClientRect().left;
    let y = e.clientY - container.getBoundingClientRect().top;
    if(!inText) root.style.setProperty("--opacity", "1")
    container.style.setProperty("--mouse-x", `${x}px`);
    container.style.setProperty("--mouse-y", `${y}px`);
}

container.onmouseleave = e =>{
    root.style.setProperty("--opacity", "0")

}
container.onmouseenter = e =>{
    root.style.setProperty("--opacity", "1")

}
const textContainer = document.querySelector(".inside-text")
textContainer.onmousemove = e =>{
    let x = e.clientX - textContainer.getBoundingClientRect().left;
    let y = e.clientY - textContainer.getBoundingClientRect().top;
    inText = true
    textContainer.style.setProperty("--mouse-x", `${x}px`);
    textContainer.style.setProperty("--mouse-y", `${y}px`);
    textContainer.style.setProperty("--text-opacity", "1");
    root.style.setProperty("--opacity", "0")
}

textContainer.onmouseleave = e =>{
    root.style.setProperty("--opacity", "1")
    textContainer.style.setProperty("--text-opacity", "0");

 
}

let wave = document.querySelector(".wave")



