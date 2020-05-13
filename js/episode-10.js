// On va calculer la remise d'un achat

var facture = prompt('Rentrez le montant de votre facture svp..!');
   
    if(facture > 40000){
        alert(Number(facture) - (Number(facture)*10 /100) );
    } else if(facture < 40000){
        alert('Pas de rémise pour vous: ' + facture);
    }
    
    