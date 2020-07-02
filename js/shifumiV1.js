// Code of Shifouni : basic version 

alert("Bonjour et bienvenu dans cette partie de Pierre Feuille Ciseau");

// store user input in userName for his name and his choice in uesrChoice
var userName = prompt("Veuillez entrer votre nom : ");

var userChoice = prompt("Faites votre choix : (Pierre, Feuille ou Ciseau)");


// ramdon number generate for the tests after
var computerChoice = Math.floor(Math.random() * Math.floor(3));

// assign a "real" value based on the number generate before
if(computerChoice === 0){
    computerChoice = "Pierre";
}else if(computerChoice === 1){
    computerChoice = "Feuille";
}else if (computerChoice === 2){
    computerChoice = "Ciseau"; 
}


// Display choice of both players
alert ("Votre choix est : " + userChoice + "\nLe choix de l'ordinateur est : " + computerChoice);

// Determine the winer,
// Display message if user win, lose or if it's a draw
if (userChoice === computerChoice){
    alert ("Match nul !!");
}else if (userChoice === "Pierre"){
    if (computerChoice === "Ciseau"){
        alert("Vous avez gagné !");
    }else if(computerChoice === "Feuille"){
        alert("Vous avez perdu.");
    }
}else if (userChoice === "Ciseau"){
    if(computerChoice === "Feuille"){
        alert("Vous avez gagné !");
    }else if (computerChoice === "Pierre"){
        alert("Vous avez perdu.");
    }
}else if(userChoice === "Feuille"){
    if (computerChoice === "Pierre"){
        alert("Vous avez gagné !");
    }else if (computerChoice === "Ciseau"){
        alert("Vous avez perdu.");
    }
}