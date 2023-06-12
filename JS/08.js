// Les Boucles

//  la boucle FOR
/* for (3 arguments){
    ...... code....
}
*/

for(var i =1; i <= 10; i += 2){
    document.write("<p>Instruction exécutée : " + i + "</p>");
}

// la boucle WHILE (tant que)
// trés utilisée quand on ne connait pas le nombre de tours de boucles à l'avance

var j = 1;
while(j <= 10){
    document.write("<hr><p>Instruction exécutée : " + j + "</p>")
    j++;
}

// EXERCICE

// j'ai 1000€ sur mon compte, chaque mois je rajoute 50€
// combien de temps pour avoir 200€ sur mon compte

var moncompte = 1000;
var temps = 0;

while(moncompte < 2000){
    moncompte += 50;
    temps++;
    document.write("<p>Sur mon compte : " + moncompte + "</p>");
    document.write("<p>Jusqu'a 2000€, il me faut : " + temps + " mois. </p>");
}


// boucle for

var tps = 0;
for(var messous = 1000; messous<2000; messous += 50){
  document.write("<p>le mois suivant j'ai : " + messous + "</p>");
  tps++
}
  document.write("<p>Il aura fallu " + tps + " mois. </p>");