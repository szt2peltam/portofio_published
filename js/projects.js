
const projects = document.querySelectorAll(".project")

const generateRandomPositions = () => ({
    blob1x: `${anime.random(0, 100)}%`,
    blob2x: `${anime.random(0, 100)}%`,
    blob3x: `${anime.random(0, 100)}%`,
    blob4x: `${anime.random(0, 100)}%`,
    blob1y: `${anime.random(0, 100)}%`,
    blob2y: `${anime.random(0, 100)}%`,
    blob3y: `${anime.random(0, 100)}%`,
    blob4y: `${anime.random(0, 100)}%`
  });
  


projects.forEach(element => {
    let positions = generateRandomPositions();
  

anime({
  targets: positions,
  keyframes : [
   generateRandomPositions(),
   generateRandomPositions(),
   generateRandomPositions(),
   generateRandomPositions(),
   generateRandomPositions(),
   generateRandomPositions(),
   generateRandomPositions(),
  ],
  easing: 'cubicBezier(.57,.14,.69,.75)',
  direction: "alternate",
  duration : 30000,
  loop:true,
  update: function(anim) {
        element.style.setProperty("--blob1x", positions.blob1x)
        element.style.setProperty("--blob2x", positions.blob2x)
        element.style.setProperty("--blob3x", positions.blob3x)
        element.style.setProperty("--blob4x", positions.blob4x)
        element.style.setProperty("--blob1y", positions.blob1y)
        element.style.setProperty("--blob2y", positions.blob2y)
        element.style.setProperty("--blob3y", positions.blob3y)
        element.style.setProperty("--blob4y", positions.blob4y)

        element.style.background = `
        radial-gradient(500px circle at var(--blob1x) var(--blob1y), rgba(212, 137, 8, 0.2), transparent 30%),
        radial-gradient(500px circle at var(--blob2x) var(--blob2y), rgba(209, 37, 37, 0.2), transparent 30%),
        radial-gradient(400px circle at var(--blob3x) var(--blob3y), rgba(245, 98, 0, 0.2), transparent 30%),
        radial-gradient(600px circle at var(--blob4x) var(--blob4y), rgba(209, 37, 37, 0.2), transparent 30%)
      `;
    
  },
  complete: function (anim){
    positions = generateRandomPositions()
  },
  begin: function(anim){

  }
})
});


