const root = document.querySelector(":root");
const body = document.body;
const size = 70;
const introductionDiv = document.querySelector(".introduction");
let introductionDone = false;
let columns = 0;
let rows = 0;
let tilecount = 0;


let checkIfFinished = setInterval(() => {
    console.log(introductionDiv.style.opacity);
    if(introductionDiv.style.opacity == 0){
        introductionDiv.classList.add("not-visible")
        introductionText.classList.add("not-visible")
        document.querySelector("main").classList.remove("not-visible");
        window.removeEventListener("resize", CreateTiles)
        clearInterval(checkIfFinished);
    }
}, 100);

import { TypeTextIntoElement } from "./texttyper.js";
const introductionText = document.querySelector(".introduction-text");

window.addEventListener("load", async()=>{
    CreateTiles();
    let loading = async() => {
        await TypeTextIntoElement(introductionText,"Welcome, please click anywhere to start!","div",50)

    }
    await loading();
    introductionDone = true;
})


function CreateTile(){
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.dataset.index = tilecount++;
    tile.addEventListener("click", async()=>{
        if(introductionDone){
            anime.timeline({
                    targets: introductionText,
                    opacity : 0
            }).add(
                {
                    targets:".tile",
                    backgroundColor:"rgb(0, 0, 0)",
                    delay:anime.stagger(60,{
                        grid:[columns,rows] , from:tile.dataset.index
                    })
                }
            )
            .add(
                {
                    targets:".introduction",
                    opacity : 0
                }
            ).add({
                targets:"main",
                opacity:1
            })
            
            
        }
    
    })
    return tile
}

function CreateTiles(){
    introductionDiv.innerHTML = "";
    tilecount = 0;
    columns = Math.floor(body.clientWidth/size);
    rows = Math.floor(body.clientHeight/size);
    root.style.setProperty("--columns", columns  );
    root.style.setProperty("--rows", rows)
    for (let index = 0; index < rows * columns; index++) {
        introductionDiv.appendChild(CreateTile());
        
    }

}

window.addEventListener("resize", 
    CreateTiles);
