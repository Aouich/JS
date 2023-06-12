// commentaire sur une ligne 
/*
    Ici, je fais 
*/

// -- : Déclarer une variable en JS

var prenom;

//  --2 : affecter une valeur à une variable

prenom="Fatima";

// --3 : une instruction se termine toujours par une point virgule, aussi il est possible d'écrire plusieurs instruction sur une seule ligne
// instr_1;
// instr_2; instr_3;

// --4 : afficher une boite de dialogue (2façons de faire)
// alert("Super,tu est arrivé sur mon site !");
// window.alert("Super,tu est arrivé sur mon site !");

// --5 : Afficher dans la console (ici la valeur de ma variable Prenom)
// console.log(prenom);

// --6 :  Afficher dans la page web 
// document.write("A la pause Bachir dort");

// -- 7 : Demander à l'utilisateur une valeur (2 façons)
// window.prompt("Question: On est quelle jour?", "un jour de la semaine");
// prompt("Question: On est quelle jour?", "un jour de la semaine");

// -- et pour manipuler cettevaleur, je n'oublie pas de la stoker
// var jour=prompt("Question: On est quelle jour?", "un jour de la semaine");
// console.log(jour);

// -- 8 : Attention /!\ le JS est sensible à la ('case sensitive')
// mavariable =/= maVariable =/= ma_variable
//               camel case      snake case

// -- 9 : Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphanumériques, et ne peut pas être un mot réservé(var,for,... des éléments natifs du langages JS)

// -- 10 : Une variable peut être déclarer de façon explicite : 
// façon explicite
//var fruit;
//fruit = "fraise";

// ou implicite :
// var fruit_2 = "poire";

/*
~~~~~~~    LES TYPE DE VARIABLES   ~~~~~~~~~~
*/

// 1. Chaîne de caractères(string)
var vacances = "2023";
var destination = "Australie";

// pour afficher
console.log(vacances,destination);

// 2. un nombre entier (integer ou int)
var annee = 2023

// pour afficher
console.log(annee)

// 3. Un nombre décimal (float)
var nombre_a_virgule = -5.32;
// console.log(nombre_a_virgule);

var vacances = "2020";
console.log(vacances);

// 4. un booléen (boolean= VRAI/FAUX = TRUE/FALSE)
var unBooleen = false;

// 5. Les constantes

/* 
    la declaration const permet de créer une constante accessible uniquement en lecture.
    Contrairement à une varaible sa valeur ne peut plus être ùodifiée par affectation plus bas dans le code
    une constante ne peut pas être déclarer à nouveau dans le même script
*/

// -- Par convention les constantes son en majuscule 

const PAYS = "France"; // string
const AN = "2020"// string
const BIRTH =2020; // nombre / into / integer

//  6. Typeof permet de connaîttre me type de ma variable

// console.log(vacances);
console.log(typeof vacances);
console.log(typeof annee)

// En JS les variables sont auto-typées
// on peut convertit une variable du type NUMBER en STRING et aussi STRING en NUMBER avec les fonctions natives de JS
// la fonction parseInt() renvoie un entier à partir d'une chaine de caractères

var unChiffre = "12"
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING => NUMBER

unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// Je ré-affecte une valeur

unChiffre = "12.22";
console.log(unChiffre);
console.log(typeof unChiffre);

// STRING = fLOAT

unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// NUMBER = STRING
var nb_en_lettres = 258;
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString();
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);


