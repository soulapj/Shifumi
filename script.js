let img = document.querySelectorAll("img");
let choices = document.querySelector("#choices");
let result = document.querySelector("#result");
let score = document.querySelector("#score");
let end = document.querySelector("#end");
let reset = document.querySelector("#reset")
img.forEach(i => {
    i.addEventListener("click", game)
    
})
reset.addEventListener("click", function(){
    compteurUser = 0;
    compteurComputer = 0;
    endGame = false;
    choices.innerHTML = "";
    result.textContent = "";
    score.innerHTML = "";
    end.innerHTML = "";
    reset.style.display = "none";
})

const winconditions = {
    "pierre" : "ciseaux",
    "ciseaux" : "feuille",
    "feuille" : "pierre"
}
let compteurUser = 0;
let compteurComputer = 0;
let endGame = false;

function game(event){
    if (!endGame){
    let user = event.target.id ;
    let pfc = ["pierre", "feuille", "ciseaux"];
    let computer = Math.floor(Math.random()*pfc.length);
    choices.innerHTML = "Vous avez choisi <strong>" + user + " </strong> et la machine a choisi <strong> " + pfc[computer] + "</strong>."
    if (user === pfc[computer]){
        gameTech("Match nul!","grey")
        // result.textContent = "Match nul!";
        // result.style.color = "grey";
    }
    else if (winconditions[user] === pfc[computer]){
        gameTech("Vous avez gagné!","green")
        // result.textContent = "Vous avez gagné!";
        // result.style.color = "green";
        compteurUser++ ;
    }
    else {
        gameTech("Vous avez perdu!","red")
        // result.textContent = "Vous avez perdu!";
        // result.style.color = "red";
        compteurComputer++ ;
    }
    score.innerHTML = "Votre score est de <strong> " + compteurUser + "</strong>.";
    score.innerHTML += " Le score de l'ordinateur est de <strong> " + compteurComputer + "</strong>.";

    if (compteurUser === 5 || compteurComputer === 5) {
        end.innerHTML = "<img src='./ressources/arbitre.jfif'>";
        end.innerHTML += (compteurUser === 5)
        ? "<span style='color: green'>Vous avez gagné</span>" 
        : "<span style='color: red'>Vous avez perdu</span>";
        //Stop le click quand la partie est finie
        endGame = true;
        reset.style.display = "inline-block";
        // img.forEach(i => {
        //     i.removeEventListener("click", game)
        // })
    }
}}
function gameTech(text, couleur, compt){
    result.textContent = text;
    result.style.color = couleur;
    // compt ++;
};
gameTech()
