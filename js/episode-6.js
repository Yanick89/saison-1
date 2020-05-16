// On va faire le calcule de la moyenne cette fois-ci;

let moy = prompt('Calculons la moyenne, pour cela rentrez le 1er nombre'),
    moy1 = prompt('Rentrez le second nombre'),
    moy2 = prompt('Et le troisième nombre');
 
// On affiche le alert pour la boîte de dialogue
alert(Number(moy) + Number(moy1) + Number(moy2) % 3 );