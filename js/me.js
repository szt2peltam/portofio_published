

// const pictureofme = document.querySelector(".pictureofme")
// pictureofme.addEventListener("drag", (event) =>{
//     MovePictureEvent(event)
// })

// let startingPosition;
// pictureofme.addEventListener("dragstart", async(event) =>{
//     startingPosition = event.clientX;
// })



// pictureofme.addEventListener("dragend", async(event) =>{
//     let mozgas = startingPosition - event.clientX;
    
//     rotation = Math.floor((mozgas / document.body.clientWidth)*360)

//     while (rotation != 0) {

//         rotation > 0 ? rotation-- : rotation++
//         await new Promise(r => setTimeout(r, 5));
//         pictureofme.style.transform = `rotateY(${rotation}deg)`

//     }
// })
// let rotation = 0;


// function MovePictureEvent(event) {
//     event.preventDefault()
//     let mozgas = startingPosition - event.clientX;
    
//     rotation = Math.floor((mozgas / document.body.clientWidth)*360)
//     pictureofme.style.transform = `rotateY(${rotation}deg)`
// }

