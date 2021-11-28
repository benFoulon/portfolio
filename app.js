const app = document.getElementById("home")
const typewriter = new Typewriter(app, {
    // loop: true,
    // delay: 75,
    });

  typewriter
  .typeString("<div><span class='home__title'>Benjamin Foulon</span><br><span class='home__title--quote'> Développeur Web et Mobile </span></div>")
  .start();






function flipSt(){
    const card = document.getElementById("card__st");
    card.classList.toggle("is-flipped");
}
function flipWp(){
    const card = document.getElementById("card__wp");
    card.classList.toggle("is-flipped");
}
function flipPf(){
    const card = document.getElementById("card__pf");
    card.classList.toggle("is-flipped");
}
function flipQg(){
    const card = document.getElementById("card__qg");
    card.classList.toggle("is-flipped");
}
function flipWa(){
    const card = document.getElementById("card__wa");
    card.classList.toggle("is-flipped");
}
function flipCalc(){
    const card = document.getElementById("card__calc");
    card.classList.toggle("is-flipped");
}
function flipTl(){
    const card = document.getElementById("card__tl");
    card.classList.toggle("is-flipped");
}
function flipHf(){
    const card = document.getElementById("card__hf");
    card.classList.toggle("is-flipped");
}