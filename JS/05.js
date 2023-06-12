// alert("salam aleykoum");

// Structure de base IF

if (true) {// par défaut la condition à vérifiée le IF IF vérifie si elle est vraie

// ...... code ......
}

var nb1 = 10;
if (nb1 < 50){
   console.log("nb1 est bien inférieur à 50");
}

// ELSE

if (true){
    // .....code si vrai...
}else{
    // ..... code si faux....
}

if (nb1 > 50){
   console.log("nb1 est bien supérieur à 50");
}else{
    console.log("nb1 est bien inférieur à 50");
}

//  EXERCICE
// on utilise le IF pour vérifier l'age de l'intarnaute.
// => s"il est majeur je lui souhaite la bienvenue
// => s'il est mineur je lui [1]signale et [2] le renvoie vers un autre site

// 1--je déclare la majorité légale

var majoriteFr = 18;

// 2--demander l'âge en s'assurant que nous avons un Number

var age = parseInt(prompt("Indiquez votre âge"));

// 3-- je vérifie si mon internaute est majeur 

if (age >= majoriteFr){
    alert("Bienvenue, vous êtes majeur")
} else {
    alert("Allez voir un autre site") // s'il est mineur je lui signale
    document.location.href="http://www.darty.fr/"// et ensuite je redirige vers darty
}
