// alert("salam aleykoum")

// -- 1. Addition
// --INFO - je peux déclarer plusieurs variable à la suite

//  je déclare mes variables
var nb1, nb2, resultat;

// j'affecte des valeurs

nb1 = 10;
nb2 = 5;

// j'utilise mes variables avec un calcul 

resultat = nb1 + nb2;

// j'utilise mon resultat dans la console

console.log(resultat);

// -- 2. Soustraction
// soustraction de nb1 - nb2 avec l'opérateur "-"

resultat = nb1 - nb2;
console.log(resultat);

// -- 3. Multiplication
// Multiplication de nb1 * nb2 avec l'operateur "*"

resultat = nb1 * nb2;
console.log(resultat);

// -- 4. Division
// division avec l'operateur "/"

resultat = nb1 / nb2;
console.log(resultat);

// -- 5. Modulo
// Le modulo retourne le reste d'une division 
// modulo de nb1 % nb2 avec l'operateur"%"

resultat= nb1 % nb2;
console.log(resultat);

// et maintenant je ré-affecte une valeur à nb1 

nb1 = 11;

resultat = nb1 % nb2;
console.log("le reste de la division de " + nb1 + " par " + nb2 + "est égal à : " + resultat);

// -- 6. Ecritures simplifiées
nb1 = 15;
nb1 = nb1 + 5; // egale à 20

nb1 += 10; //nb1 lui-même + 10 
console.log('le resultat de "nb1 += 10;" est ' + nb1)
// egal à 30, alternance de guillemet simples et doubles pour ne pas casser ma chaine de caractères

// Si j'utilise un ' (apostrophe) dans une phrase concaténée, je peux échapper le caractère à l'aide d'un anti-slach \ (alt gr + 8)



