// Code of Shifouni : basic version 

alert("Bonjour et bienvenu dans cette partie de Pierre Feuille Ciseau");

// store user input in userName for his name and his choice in uesrChoice
var userName = prompt("Veuillez entrer votre nom : ");

var userChoice = prompt("Faites votre choix : (Pierre, Feuille ou Ciseau)");


// ramdon number generate for the tests after
var randomNum = Math.floor(Math.random() * Math.floor(3));

// assign a "real" value based on the number generate before
// if(computerChoice === 0){
//     computerChoice = "Pierre";
// }else if(computerChoice === 1){
//     computerChoice = "Feuille";
// }else if (computerChoice === 2){
//     computerChoice = "Ciseau"; 
// }

 var computerChoice = ["Pierre", "Feuille","Ciseau"];

var userValue = {
    Pierre : 0,
    Feuille : 1,
    Ciseau : 2
};

var scoreTable = 
[
    [2, 1, 0],
    [0, 2, 1],
    [1, 0, 2]
];

var final = scoreTable[userValue[userChoice]][randomNum];
console.log("valeur cpu : " + randomNum + "\nvaleur du tableau des scores : " + scoreTable[userValue[userChoice]][randomNum]);
// Display choice of both players
alert ("Votre choix est : " + userChoice + "\nLe choix de l'ordinateur est : " + computerChoice[randomNum]);

// Determine the winer,
// Display message if user win, lose or if it's a draw

// if (userChoice === computerChoice){
//     alert ("Match nul !!");
// }else if (userChoice === "Pierre"){
//     if (computerChoice === "Ciseau"){
//         alert("Vous avez gagné !");
//     }else if(computerChoice === "Feuille"){
//         alert("Vous avez perdu.");
//     }
// }else if (userChoice === "Ciseau"){
//     if(computerChoice === "Feuille"){
//         alert("Vous avez gagné !");
//     }else if (computerChoice === "Pierre"){
//         alert("Vous avez perdu.");
//     }
// }else if(userChoice === "Feuille"){
//     if (computerChoice === "Pierre"){
//         alert("Vous avez gagné !");
//     }else if (computerChoice === "Ciseau"){
//         alert("Vous avez perdu.");
//     }
// }

if (final === 0){
    alert("Vous avez perdu.");
}else if (final === 1){
    alert("Vous avez gagné §")
}else if (final === 2){
    alert("Match nul ...")
}