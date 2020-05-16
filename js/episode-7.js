// On va travailler sur les conditions

let  user = prompt('quel est votre prénom...?'),
    age = prompt('Pour rentrer dans cette boîte il faut avoir 18 ans,');

if(age > 18 || age == 18 ){
    alert('Vous pouvez rentrer ' + user);
}
else if (age < 18){
    alert('Vous ne pouvez pas y accerder à ' + age +' ans ' + user);
}

