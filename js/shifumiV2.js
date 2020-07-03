// Code of Shifouni : advenced version 

var round = {
    win : 0,
    lose : 0
};

var possibleChoices = ["pierre", "feuille","ciseau"];

// victory matrix : 
// 0 -> lose
// 1 -> win
// 2 -> draw
// var scoreTable = [
//     [2, 0, 1],
//     [1, 2, 0],
//     [0, 1, 2]
// ];

var victoryTable = {
    pierre : "ciseau",
    feuille : "pierre",
    ciseau : "feuille"
}

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
        for(var i = 0; i < possibleChoices.length; i++){
            if(userChoice === possibleChoices[i]){
                return userChoice;
            }
        }
        userChoice = checkChoice(prompt("Veuillez rentrer une réponse valide : (pierre, feuille ou ciseau)").toLowerCase());
    }
}

// Check and Display both choice and determine who win  
function whoWinRound(userChoice, randomNum){
    // Display choice of both players
    alert ("Votre choix est : " + userChoice + "\nLe choix de l'ordinateur est : " + possibleChoices[randomNum]);

    if(userChoice === possibleChoices[randomNum]){
        alert("Match nul ...");
    }else{        
        for (var key in victoryTable) {
            if (key === userChoice && victoryTable[key] === possibleChoices[randomNum]){
                alert("Vous avez gagné !")
                round.win ++;
                whoWinGame();
            }else{
                alert("Vous avez perdu.");
                round.lose ++;
                whoWinGame();
            }
        }
    }
    whoWinGame();
    console.log("score : " + round.win + " / " + round.lose);
}

function whoWinGame(){
    alert("Score : " + userName + " : " + round.win + " victoire(s)\nScore : CPU : " + round.lose+ " victoire(s)\nPrêts pour la prochaine manche ?")
    if (round.win === 3 || round.lose === 3){
        return replay(prompt("Voulez-vous refaire une partie en premier à 3 victoires ? (y/n)"));
    }
    
    main();
}
 
function main (){
    var userChoice = checkChoice(prompt("Faites votre choix : (Pierre, Feuille ou Ciseau)").toLowerCase());
    var userValue = possibleChoices.indexOf(userChoice);
    var randomNum = Math.floor(Math.random() * Math.floor(3));
    //var final = scoreTable[userValue][randomNum];
     //+ "\nvaleur table de victorie : " + scoreTable[userValue][randomNum]
    console.log("valeur user : " + userChoice + "\nvaleur CPU : " + randomNum );
    whoWinRound(userChoice,randomNum);
    console.log("score : " + round.win + "/" + round.lose  );
}
// Start another game if the use want to 
function replay(answer){
    if (answer === "y"){
        round.win = 0;
        round.lose = 0;

        main();
    }else if (answer === "n"){
        alert ("Merci d'avoir jouer :)");
    }else{
        replay(prompt("entrez une valeur correct pour rejouer : y/n "))
    }
}
alert("Bonjour et bienvenu dans cette partie de Pierre Feuille Ciseau en premier à 3 victoires");

var userName = checkName(prompt("Veuillez entrer votre nom : "));
main();