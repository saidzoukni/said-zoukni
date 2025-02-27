// ex1
console.log("hello from Semlalia");
const readline = require("readline-sync");
let prenom = readline.question("entrer votre prenom: ");
console.log("Hello" + prenom);



// ex2
let nom = "Said", age = 19, ville = "Marrakech";
console.log(`Je m'apelle ${nom}, j'ai ${age} ans et j'habite a ${ville}.`);

// ex3
console.log("Je m'apelle "+ nom +", j'ai "+ age + " ans et j'habite a "+ville+".");
console.log(`Je m'apelle ${nom}, j'ai ${age} ans et j'habite a ${ville}.`);

// ex4
let anneeNaissance = "2005";
console.log(`vous avez ${2025-Number(anneeNaissance)} ans`);

// ex5
let nb1 = prompt("Donnez le premier nombre: ", "");
let nb2 = prompt("Donnez le deusieme nombre: ", "");
console.log(`la somme est : ${Number(nb1)+Number(nb2)}`);
console.log(`le produit est : ${Number(nb1)*Number(nb2)}`);
console.log(`la differance est : ${Number(nb1)-Number(nb2)}`);
console.log(`le quotient est : ${Number(nb1)/Number(nb2)}`);
console.log(`Le reste de la division est : ${Number(nb1)%Number(nb2)}`);

// ex6
let a = 5;
let b = 10;
a = a + b; 
b = a - b; 
a = a - b; 
console.log(a); 
console.log(b); 

// ex6 v2
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a); 
console.log(b);
// ex7
let s = "hello";
let n = 2000;
let boo = true;
let u = undefined;
let nu = null;
console.log(typeof(s));
console.log(typeof(n));
console.log(typeof(boo));
console.log(typeof(u));
console.log(typeof(nu));

// ex8
let x = "10";
let y = 10;
console.log(x==y);
console.log(x===y);
console.log(x!=y);
console.log(x!==y);

// ex9 
let cpt = 0;
console.log(cpt++);
console.log(cpt--);

// ex10
let v = 20;
console.log(v+=5);
console.log(v-=2);
console.log(v*=3);
console.log(v/=2);
console.log(v%=4);