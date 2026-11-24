const destinations = [
    { id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7, disponible: true },
    { id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10, disponible: true },
    { id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5, disponible: false },
    { id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4, disponible: true },
    { id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12, disponible: true },
    { id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6, disponible: false }
];

// 1. Afficher le nom de toutes les villes avec forEach()
destinations.forEach(destination => {
    console.log(destination.ville);
});


// 2. Créer un tableau contenant uniquement les noms des villes avec map()
const villes = destinations.map(destination => destination.ville);

console.log(villes);


// 3. Afficher les destinations dont le prix est inférieur à 1500 DT avec filter()
const destinationsMoins1500 = destinations.filter(destination => destination.prix < 1500);

console.log(destinationsMoins1500);


// 4. Rechercher la destination dont l'identifiant est égal à 3 avec find()
const destination3 = destinations.find(destination => destination.id === 3);

console.log(destination3);


// 5. Trouver la position de Tokyo avec findIndex()
const positionTokyo = destinations.findIndex(destination => destination.ville === "Tokyo");

console.log(positionTokyo);


// 6. Vérifier s'il existe au moins une destination disponible avec some()
const existeDisponible = destinations.some(destination => destination.disponible === true);

console.log(existeDisponible);


// 7. Vérifier si toutes les destinations ont un prix supérieur à zéro avec every()
const prixPositifs = destinations.every(destination => destination.prix > 0);

console.log(prixPositifs);


// 8. Calculer le budget total avec reduce()
const budgetTotal = destinations.reduce((total, destination) => {
    return total + destination.prix;
}, 0);
console.log(budgetTotal);




destinationsMoins1500[0].destinationsMoins1500+=1000;
console.log(destinationsMoins1500);
console.log(destinations);

destinationsMoins1500.map(destinations=> destinations.destinationsMoins1500+=1000);
console.log(destinationsMoins1500);
console.log(destinations);

