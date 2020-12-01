let operande = 10;

let entier = document.getElementById('entier');
let entier1 = parseInt("32");
let result = entier1 * operande;
entier.innerHTML = result;

let flottant = document.getElementById('flottant');
let flottant1 = parseFloat("54.85");
let result2 = (flottant1 * operande) + result;
flottant.innerHTML = result2;

let nonNumerique = document.getElementById('non-numerique');
let num = "Vous y arriverez !";
let result3;

if (isNaN(num)) {
    num = 0;
    nonNumerique.innerHTML = num;
}

else {
    result3 = parseInt(num);
    nonNumerique.innerHTML = num;
}

let random1 = document.getElementById('random');
let aleatoire;
for( let i = 0; i < 1; i++) {
    aleatoire = Math.trunc(Math.random() * 100);
    random1.innerHTML = aleatoire;
}

let trunc1 = document.getElementById('trunc');
let trunc2 = 54.988;
let result5 = Math.trunc(trunc2);
trunc1.innerHTML = result5;

let replace = document.getElementById('replace');
let world = "Hello world !";
let name = world.replace("world", "Ardoise Chloé");
replace.innerHTML = name;


console.log(random());