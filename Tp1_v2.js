const readline = require("readline-sync");

//ex1
let x=5, y=10;
[x,y] = [y,x];
console.log("x = "+x, "y = "+y);





//ex2
var nb="1989";
console.log(typeof(Number(nb)));




//ex3
let a = 10;
a+=5;
console.log(a);
a-=3;
console.log(a);




//ex4
let estAdulte;
let age = readline.questionInt("entrer votre age: ");
if(age>=18){
    estAdulte = true;
}else{
    estAdulte = false;
}
console.log(estAdulte);



// ex5
let variable = readline.question("entrer une chaine de caractere: ");
console.log("la longuere de cette chaine est: "+variable.length);




// ex6
let chaine = readline.question("entrer une chaine de caractere: ");
console.log("le troisieme caractere de cette chaine est: "+chaine.charAt(2));






// ex7
let PI = 3.14159;
PI= 4
console.log(PI);






// ex8
let HT = readline.questionFloat("entrer le prix HT: ");
let TVA = readline.questionFloat("entrer le taux de TVA en pourcentage: ");
TTC = HT*(1+(TVA/100));
console.log(TTC);






// ex9
let a = readline.question("entrer un préfixe de facture: ");
let b = readline.questionInt("entrer un numéro de base: ");
let c = readline.question("entrer un suffixe: ");
console.log("le numéro de facture complet est: "+a+"-"+b+"-"+c);




// ex10
let mot = readline.question("entrer un mot: ");
let motInverse = "";
for(let i = mot.length; i>=0; i--){
    motInverse+=mot.charAt(i);
}
console.log("le mot inversé est: "+motInverse);





// ex11
let mot = readline.question("entrer un mot: ");
let estPalindrome = true;
for (let i = 0; i < mot.length / 2; i++) {
    if (mot[i] !== mot[mot.length - 1 - i]) {
        estPalindrome = false;
        break;
    }
}
if (estPalindrome) {
    console.log(mot + " est un palindrome");
} else {
    console.log(mot + " n'est pas un palindrome");
}




// ex12
for (let i = 1; i < 4; i++) {
    var note = readline.questionFloat("entrer la note numero "+i+": ");
    var coef = readline.questionFloat("entrer le coef de la note numero "+i+": ");
}
let notePonderee = (note*coef)/3;
console.log("la moyenne pondérée numero est: "+notePonderee);




// ex13
let heures = readline.questionInt("Entrez le nombre d'heures: ");
let minutes = readline.questionInt("Entrez le nombre de minutes: ");
let secondes = readline.questionInt("Entrez le nombre de secondes: ");

let totalSecondes = (heures * 3600) + (minutes * 60) + secondes;
console.log("Le nombre total de secondes est: " + totalSecondes);



// ex14
let firstName = readline.question("entrer votre prenom: ");
let birthYear = readline.questionInt("entrer votre année de naissance: ");
console.log("votre mot de passe est le: "+firstName+birthYear+"!");
// ex15

