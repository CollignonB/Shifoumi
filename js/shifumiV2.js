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
var scoreTable = [
    [2, 0, 1],
    [1, 2, 0],
    [0, 1, 2]
];

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
        console.log(userChoice);
        for(var i = 0; i < possibleChoices.length; i++){
            if(userChoice === possibleChoices[i]){
                return userChoice;
            }
        }
        userChoice = checkChoice(prompt("Veuillez rentrer une réponse valide : (pierre, feuille ou ciseau)").toLowerCase());
    }
}

// Check and Display both choice and determine who win  
function whoWinRound(userChoice, final, randomNum){
    // Display choice of both players
    alert ("Votre choix est : " + userChoice + "\nLe choix de l'ordinateur est : " + possibleChoices[randomNum]);

    if (final === 0){
        alert("Vous avez perdu.");
        round.lose ++;
    }else if (final === 1){
        alert("Vous avez gagné !")
        round.win ++;
    }else if (final === 2){
        alert("Match nul ...")
    }
    console.log("score : " + round.win + " / " + round.lose);

    whoWinGame();
}

function whoWinGame(){
    if (round.win === 3 || round.lose === 3){
        return replay(prompt("Voulez-vous refaire une partie en premier à 3 victoires ? (y/n)"));
    }
    alert("Score : " + userName + " : " + round.win + " victoire(s)\nScore : CPU : " + round.lose+ " victoire(s)\nPrêts pour la prochaine manche ?")
    
    main();
}
 
function main (){
    var userChoice = checkChoice(prompt("Faites votre choix : (Pierre, Feuille ou Ciseau)").toLowerCase());
    var userValue = possibleChoices.indexOf(userChoice);
    var randomNum = Math.floor(Math.random() * Math.floor(3));
    var final = scoreTable[userValue][randomNum];
    console.log("valeur user : " + userChoice + "\nvaleur CPU : " + randomNum + "\nvaleur table de victorie : " + scoreTable[userValue][randomNum]);
    whoWinRound(userChoice,final,randomNum);
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