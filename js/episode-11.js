// On va passer à l'affichage de la table de mulitiplication d'un chiffre

var nombre = prompt('Entrez un nombre pour afficher la table de multiplication'),
    nombre1 = 0;
    
    // On va passer par une condition, "tant que"
    while(nombre1 <= 9){
        // mais d'abord en incrémente les chiffres qui vont servir pour compter jusqu'à 10 
        ++nombre1;
         
        // Ici, on affiche dans la console pour bien voir l'élement placé dans la boîte de dialogue
        console.log(nombre1 + ' x ' + nombre + ' = ' + Number(nombre) * nombre1);

        // On affiche notre multiplication avec le alert.
        alert(nombre1 + ' x ' + nombre + ' = ' + Number(nombre) * nombre1)
        // alert(Number(nombre) * nombre1)
    }

   

    
    