

const stars = document.querySelectorAll(".magic-star");

const animate = star =>{
    star.style.setProperty("--star-left", `${anime.random(-15,100)}%`);
    star.style.setProperty("--star-top", `${anime.random(-40, 30)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

stars.forEach(element => {
    setTimeout(() => {
        animate(element);
        
        setInterval(() => animate(element), anime.random(1000,1500));
      });

});

