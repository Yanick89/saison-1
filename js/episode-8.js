// On va afficher au alerte la condition

var userName = prompt('Rentrez votre nom svp'),
    sex = prompt('ainsi que votre sexe: f ou femme, h ou homme');


    // Ici on met en place la condtion qui va vérifier ce que nous avons mentionner en haut
    if(sex == 'femme' || sex == 'f' || sex == 'F' || sex == 'Femme' || sex == 'FEMMME'){
        alert('Bonjour madame ' + userName);
    }

    else if(sex == 'homme' || sex == 'h' || sex == 'H'  || sex == 'Homme' || sex == 'HOMME'){
        alert('Bonjour monsieur ' + userName)
    }