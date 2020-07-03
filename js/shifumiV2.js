// Code of Shifouni : advenced version 

var round = {
    win : 0,
    lose : 0
};

var computerChoice = ["Pierre", "Feuille","Ciseau"];

var userValue = {
    pierre : 0,
    feuille : 1,
    ciseau : 2
};

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

// Check and Display both choice and determine who win  
function whoWinRound(userChoice, final, randomNum){
    // Display choice of both players
    alert ("Votre choix est : " + userChoice + "\nLe choix de l'ordinateur est : " + computerChoice[randomNum]);

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  

function whoWinGame(){
    if (round.win === 3 || round.lose === 3){
        return replay(prompt("Voulez-vous refaire une partie en premier à 3 victoires ? (y/n)"));
    }
    alert("Score : " + userName + " : " + round.win + " victoire(s)\nScore : CPU : " + round.lose+ " victoire(s)\nPrêts pour la prochaine manche ?")
    
    main();
}
 
function main (){

    var userChoice = checkChoice(prompt("Faites votre choix : (Pierre, Feuille ou Ciseau)").toLowerCase());
    var randomNum = Math.floor(Math.random() * Math.floor(3));
    var final = scoreTable[userValue[userChoice]][randomNum];
    console.log("valeur user : " + userChoice + "\nvaleur CPU : " + randomNum + "\nvaleur table de victorie : " + scoreTable[userValue[userChoice]][randomNum]);
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