// Code of Shifouni : advenced version 

alert("Bonjour et bienvenu dans cette partie de Pierre Feuille Ciseau en premier à 3 victoires");
var round = {
    win : 0,
    lose : 0
};

// store user input in userName for his name and his choice in uesrChoice
var userName = checkName(prompt("Veuillez entrer votre nom : "));
ShifumiBO();
// var userChoice = checkChoice(prompt("Faites votre choix : (Pierre, Feuille ou Ciseau)").toLowerCase());

// var computerChoice = cpuMakeChoice();

// var replay = whoWin(userChoice,computerChoice);



// Check if the user enter a valide name 
function checkName(userName){
    while (userName.length < 2 || userName.length >= 20){
        userName = prompt("Veuillez rentrer un nom valide : (entre 2 et 20 caractères)");
    }
    return userName;
}

// Check if the user enter a valide answer (case sensitive)
function checkChoice(userChoice){
    while (userChoice){
        //console.log(userChoice);
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


// Generate a number and assigned it a value for the game
function cpuMakeChoice(){

    var computerChoice = Math.floor(Math.random() * Math.floor(3));

    if(computerChoice === 0){
        computerChoice = "pierre";
    }else if(computerChoice === 1){
        computerChoice = "feuille";
    }else if (computerChoice === 2){
        computerChoice = "ciseau"; 
    }
    return computerChoice;

}

// Check and Display both choice and determine who win  
function whoWin(userChoice, computerChoice){
    // Display choice of both players
    alert ("Votre choix est : " + userChoice + "\nLe choix de l'ordinateur est : " + computerChoice);

// Determine the winer,
// Display message if user win, lose or if it's a draw
    if (userChoice === computerChoice){
        alert ("Match nul !!");
    }else if (userChoice === "pierre"){
        if (computerChoice === "ciseau"){
            alert("Vous avez gagné !");
            round.win ++;
        }else if(computerChoice === "feuille"){
            alert("Vous avez perdu.");
            round.lose ++;
        }
    }else if (userChoice === "ciseau"){
        if(computerChoice === "feuille"){
            alert("Vous avez gagné !");
            round.win ++;
        }else if (computerChoice === "pierre"){
            alert("Vous avez perdu.");
            round.lose ++;
        }
    }else if(userChoice === "feuille"){
        if (computerChoice === "pierre"){
            alert("Vous avez gagné !");
            round.win ++;
        }else if (computerChoice === "ciseau"){
            alert("Vous avez perdu.");
            round.lose ++;
        }
    }
    console.log("score : " + round.win + " / " + round.lose);
    if (round.win === 3 || round.lose === 3){
        return replay(prompt("Voulez-vous refaire une partie en premier à 3 victoires ? (y/n)"));
    }
    alert("Score : " + userName + " : " + round.win + " victoire(s)\nScore : CPU : " + round.lose+ " victoire(s)\nPrêts pour la prochaine manche ?")
    
    ShifumiBO();
}

// 
function ShifumiBO (){

    var userChoice = checkChoice(prompt("Faites votre choix : (Pierre, Feuille ou Ciseau)").toLowerCase());

    var computerChoice = cpuMakeChoice();

    whoWin(userChoice,computerChoice);
}
// Start another game if the use want to 
function replay(answer){
    if (answer === "y"){
        round.win = 0;
        round.lose = 0;

        ShifumiBO();
    }else if (answer === "n"){
        alert ("Merci d'avoir jouer :)");
    }else{
        replay(prompt("entrez une valeur correct pour rejouer : y/n "))
    }
}