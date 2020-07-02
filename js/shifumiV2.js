// Code of Shifouni : basic version 

alert("Bonjour et bienvenu dans cette partie de Pierre Feuille Ciseau");

// store user input in userName for his name and his choice in uesrChoice
var userName = checkName(prompt("Veuillez entrer votre nom : "));


function checkName(userName){
    while (userName.length < 2 || userName.length >= 20){
        userName = prompt("Veuillez rentrer un nom valide : (entre 2 et 20 caractères)");
    }
    return userName;
}

var userChoice = checkChoice(prompt("Faites votre choix : (Pierre, Feuille ou Ciseau)").toLowerCase());

function checkChoice(userChoice){
    while (userChoice){
        console.log(userChoice);
        if (userChoice === "pierre"){
            return userChoice;
        }else if (userChoice === "feuille"){
            return userChoice;
        }else if (userChoice === "ciseau"){
            return userChoice;
        }else{
           userChoice = prompt("Veuillez rentrer une réponse valide : (pierre, feuille ou ciseau)");
        }
    }
}

// ramdon number generate for the tests after
var computerChoice = Math.floor(Math.random() * Math.floor(3));

// assign a "real" value based on the number generate before
if(computerChoice === 0){
    computerChoice = "pierre";
}else if(computerChoice === 1){
    computerChoice = "feuille";
}else if (computerChoice === 2){
    computerChoice = "ciseau"; 
}


// Display choice of both players
alert ("Votre choix est : " + userChoice + "\nLe choix de l'ordinateur est : " + computerChoice);

// Determine the winer,
// Display message if user win, lose or if it's a draw
if (userChoice === computerChoice){
    alert ("Match nul !!");
}else if (userChoice === "pierre"){
    if (computerChoice === "ciseau"){
        alert("Vous avez gagné !");
    }else if(computerChoice === "feuille"){
        alert("Vous avez perdu.");
    }
}else if (userChoice === "ciseau"){
    if(computerChoice === "feuille"){
        alert("Vous avez gagné !");
    }else if (computerChoice === "pierre"){
        alert("Vous avez perdu.");
    }
}else if(userChoice === "feuille"){
    if (computerChoice === "pierre"){
        alert("Vous avez gagné !");
    }else if (computerChoice === "ciseau"){
        alert("Vous avez perdu.");
    }
}