// On va écrire un programme qui demande la moyenne d'un élève

let moyEleve = prompt('Veuillez renseigner votre moyenne pour l\'admission de votre enfant');

if( moyEleve < 10 ){
    alert('Vous ne pouvez pas prétendre à une entrée dans notre établissement');
} else if (moyEleve > 10 & moyEleve == 11){
    alert('passable');
} else if(moyEleve > 11 & moyEleve == 12){
    alert('Assez-bien');
} else if(moyEleve > 13 & moyEleve == 15){
    alert('Bien');
} else if( moyEleve > 15 & moyEleve == 17){
    alert('Très bien');
} else if(moyEleve > 17 & moyEleve == 20){
    alert('Excellent');
} else if(moyEleve > 20){
    alert('Une erreur est survenue dans le remplissage des données');
}
