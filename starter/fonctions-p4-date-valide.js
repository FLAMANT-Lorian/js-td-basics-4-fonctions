/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    }
    return false;
}

// Fonction pour vérifier si une date est valide
function isValid(day, month, year) {
    let maxDays = 31;

    if (isNaN(day) || isNaN(month) || isNaN(year) || day <= 0 && month <= 0 && year <= 0 || month > 12) {
        return false;
    }
    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11:
            maxDays = 30;
            break;
        case 2:
            if (isBissextile(year) === true) {
                maxDays = 29;
            } else {
                maxDays = 28;
            }
            break;
    }
    return day > 0 && day <= maxDays;
}


// Demander à l'utilisateur de saisir une date
const day = parseInt(prompt('Indiquer le jour (en nombres) :'));
const month = parseInt(prompt('Indiquer le mois (en nombres) :'));
const years = parseInt(prompt("Indiquer l'année (en nombres):"));

// Utilisation de la fonction isValid pour vérifier la date

console.log(`Est-ce que la date existe ? ${isValid(day, month, years)}`);
