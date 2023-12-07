const letters = document.querySelectorAll(".email-letter")
const letterContainer = document.querySelector(".email")
const raindrops = document.querySelectorAll(".raindrop")

let index = 0;
let x = 0;
raindrops.forEach(raindrop => {
    raindrop.style.left = `${x}px`;
    index++;
    if(index % 3 == 0) x += 10
});

const fillUpLetters = (sentence, list) => {
    let index = 0
    list.forEach(letter => {
        if(index < sentence.length){

            letter.innerText = sentence[index]
        }else{
            letter.innerText = ""

        }
        index++
    });
}

fillUpLetters("My email address", letters);
let lettersDown = false;
letterContainer.addEventListener("mouseenter", ()=>{
    setTimeout(() => {
        fillUpLetters("pelitamas494@gmail.com", letters);
    }, 1300);
    setTimeout(() => {
        lettersDown = true;
    }, 2500);
    anime.timeline({
        duration:1000
    }
    )
    .add({
        targets:letters,
        top:-100,
        delay:anime.stagger(60)

    })
    .add({
        targets:letters,
        top:0,
        delay:anime.stagger(60)
    })
})



letterContainer.addEventListener("mouseleave", ()=>{
    lettersDown = false;
    setTimeout(() => {
        fillUpLetters("My email address", letters);
    }, 1300);
    anime.timeline({
        duration:1000
    }
    )
    .add({
        targets:letters,
        top:-100,
        delay:anime.stagger(60)

    })
    .add({
        targets:letters,
        top:0,
        delay:anime.stagger(60)
    })
})



