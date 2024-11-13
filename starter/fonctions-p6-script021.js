/*****************************
 * 021 - Function Statements and Expressions
 */

/*
1. Déclarez, en utilisant une fonction expression, la fonction whatDoYouDo
   prenant deux paramètres, job et firstName. Cette fonction retourne le prénom suivi
   d'une phrase qui décrit le job de la personne pour différents cas de job :
   - si c'est teacher, "teaches kids how to code"
   - si c'est driver, "drives a cab in Lisbon"
   - si c'est designer, "designs beautiful websites"
   - dans tous les autres cas, "does something else"
*/


// Utilisez des conditions (if/else if) pour décrire le job de la personne en fonction de la valeur de 'job'.
// Renvoyez la phrase appropriée en utilisant un return.

/*
2. Utilisez cette fonction pour afficher dans la console ce que font :
    - John (teacher)
    - Jane (designer)
    - Mark (retired)
*/

const whatDoYouDo = function (job, firstName) {
    if (job === 'teacher') {
        return `${firstName} is a ${job}, ${firstName} teaches kids how to code.`;
    } else if (job === 'driver') {
        return `${firstName} is a ${job}, ${firstName} drives a car in Lisbon.`;
    } else if (job === 'designer') {
        return `${firstName} is a ${job}, ${firstName} designs beautiful websites.`;
    } else {
        return `${firstName} does something else.`
    }
}

console.log(whatDoYouDo('teacher', 'Jhon'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));