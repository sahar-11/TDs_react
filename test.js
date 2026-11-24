const etudiants = [
    { nom: "Ahmed", age: 20, note: 15 },
    { nom: "Sara", age: 21, note: 8 },
    { nom: "Ali", age: 19, note: 17 },
    { nom: "Meriem", age: 22, note: 11 },
    { nom: "Youssef", age: 20, note: 6 }
];
console.log("Bonjour Node.js !");
console.log("=== Tous les étudiants ===");

etudiants.forEach(function(etudiant) {
    console.log(
        etudiant.nom + " - " +
        etudiant.age + " ans - " +
        etudiant.note
    );
});
console.log("\n=== Étudiants admis ===");

const admis = etudiants.filter(function(etudiant) {
    return etudiant.note >= 10;
});

admis.forEach(function(etudiant) {
    console.log(etudiant.nom);
});
console.log("\n=== Étudiants admis ===");

console.log("\n=== Meilleure note ===");

const meilleur = etudiants.reduce(function(meilleur, etudiant) {
    if (etudiant.note > meilleur.note) {
        return etudiant;
    }

    return meilleur;
});

console.log(
    "Meilleure note : " +
    meilleur.nom +
    " - " +
    meilleur.note
)