// Ecrivons un programme en boucle qui va demander au user de rentrer la bonne reponse

let reponse = Number(prompt('Renseignez la bonne réponse svp. Combien font 15 + 8')) ;

// On passe tout de suite à la condition,
while(reponse != 23){
    reponse = Number(prompt('Erreur, veuillez récommencez svp'));
    if(reponse == 23){
        alert('Vous avez réussi')
        break;
    }
}
