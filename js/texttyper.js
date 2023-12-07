

let subelementcount = 0;
export async function TypeTextIntoElement(element, text, subelement, speed){

    element.insertAdjacentHTML("beforeend", `<${subelement} class="subelement-${subelementcount}"></${subelement}>`);
    let subelementRef = document.querySelector(`.subelement-${subelementcount}`);
    subelementcount++;
    for (let index = 0; index < text.length; index++) {

            subelementRef.textContent += text.slice(index,index+1);
            await new Promise(r => setTimeout(r,speed));

        
    }



}
let buttonCount = 0;
export async function InsertButtonIntoElement(element, buttontext, clickListener){

    element.insertAdjacentHTML("beforeend", `<button class="button-${buttonCount}">${buttontext}</button>`);
    let buttonRef = document.querySelector(`.button-${buttonCount}`);
    buttonRef.addEventListener("click", (e)=>{
        clickListener(e);
    })
}



