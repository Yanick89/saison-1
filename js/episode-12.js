// Ecrire un programme qui fait la somme des 10 premiers nombres entiers à partir de 1. Le résultat est affiché en console.

let nbreEntier = 9,
    nbresult,
    nbre1 = 0;

    while(nbreEntier <= 21 && nbre1 <= 9){
        ++nbreEntier;
        ++nbre1;
        // On place une autre variable qui va contenir le résultat de l'addition des deux autre variables
        nbresult = Number(nbreEntier) + Number(nbre1);
        console.log(nbreEntier + ' + ' +nbre1+ ' = ' + nbresult )
    }