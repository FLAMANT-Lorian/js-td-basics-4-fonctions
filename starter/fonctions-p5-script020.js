/*****************************
* 020 - Fonctions
*/

// 1. Fonction avec un paramètre et un return

/*
1. Déclarez la fonction calculateAge prenant le paramètre birthYear.
2. À l'intérieur de la fonction, calculez l'âge de la personne en soustrayant birthYear de l'année courante.
3. Utilisez un return pour renvoyer l'âge calculé.
*/


/*
Utilisez la fonction calculateAge que vous venez de créer pour calculer
	- l'âge de John (né en 1990)
	- l'âge de Mike (né en 1948)
	- l'âge de Jane (née en 1969)
4. Affichez ces âges dans la console.
*/


// 2. Fonction avec deux paramètres et un return



/*
1. Déclarez la fonction giveYearsUntilRetirement prenant les paramètres
	- year (pour l'année de naissance de la personne)
	- firstName (pour le prénom de la personne)
2. À l'intérieur de la fonction, calculez l'âge de la personne en utilisant la fonction calculateAge que vous venez de créer.
3. Calculez le nombre d'années qui restent jusqu'à la pension (65 ans) et stockez-le dans une variable retirement.
4. Si ce nombre est positif, affichez "… prendra sa pension dans … ans",
	 sinon affichez "… est déjà pensionné(e)".
5. Utilisez ensuite cette fonction pour calculer dans combien d'années seront pensionnés
	- John (né en 1990)
	- Mike (né en 1948)
	- Jane (née en 1969)
*/

function calculateAge(birthYear){
    return 2024 - birthYear;
}

// console.log(`Jhon à ${calculateAge(1990)} ans.`);
// console.log(`Mike à ${calculateAge(1948)} ans.`);
// console.log(`Jane à ${calculateAge(1969)} ans.`);


function giveYearsUntilRetirement(year, firstname){
   const retirement = 65 - calculateAge(year);
   if (retirement > 0){
       return `${firstname} prendra sa pension dans ${retirement} ans.`;
   } else {
       return `${firstname} est déjà pensionné(e).`;
   }
}

console.log(giveYearsUntilRetirement(1990, 'Jhon'));
console.log(giveYearsUntilRetirement(1948, 'Mike'));
console.log(giveYearsUntilRetirement(1969, 'Jane'));

