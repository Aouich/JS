// alert("salam aleykoum")

// L'opérateur de comparaison == signifie 'égal à'

var nb1 = 123;
var nb2 = "123";

console.log(nb1 == nb2); //returne TRUE

// L'opérateir de comparaison === signifie 'strictement égal à'
// il permet de vérifier la Valeur et le TYPE 

console.log(nb1 === nb2); //returne FALSE

// L'operateur != signifie ' différent de .... en valeur'

console.log(nb1 != nb2); // returne FALSE

// l'opérateur !== signifie ' strictement différent de ... en TYPE et en VALEUR'

console.log(nb1 !== nb2); // returne TRUE

// EXERCICE

// J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
// Je doit saisir mon prénom et mon âge pour être authentifié sur le site.
// En cas d'échec une alerte m'informe du problème.
// si tout se passe bien, un message de bienvenue m'accueille.

var prenom, monAge;
prenom = "fatima";
monAge = 20;

// 1--demander le prénom à l'utilisateur avec un prompt

var prenomLogin = prompt('Quel est votre prénom?')

// 2--je vérifie si le "prenomLogin" correspond au "prénom" sur la base de donnée

if (prenom === prenomLogin){
    var ageLogin = parseInt(prompt("Votre âge ?"));

if (ageLogin === monAge){
    alert("Bienvenue" + prenomLogin);

} else {
     alert("Erreur d'âge");
}

}else {
    alert("Attention, prenom non reconnu")
}


