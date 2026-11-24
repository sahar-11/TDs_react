const reservations = [
    { numero: 101, client: "Nadia", destination: "Bali", montant: 1800, statut: "Confirmée" },
    { numero: 102, client: "Karim", destination: "Rome", montant: 950, statut: "En attente" },
    { numero: 103, client: "Leila", destination: "Tokyo", montant: 2500, statut: "Confirmée" },
    { numero: 104, client: "Sami", destination: "Santorin", montant: 1200, statut: "Annulée" },
    { numero: 105, client: "Amira", destination: "Djerba", montant: 500, statut: "Confirmée" }
];


// 1. Réservations confirmées avec filter()
const confirmees = reservations.filter(
    reservation => reservation.statut === "Confirmée"
);

console.log(confirmees);


// 2. Noms des clients avec map()
const clients = reservations.map(
    reservation => reservation.client
);

console.log(clients);


// 3. Rechercher la réservation numéro 103 avec find()
const reservation103 = reservations.find(
    reservation => reservation.numero === 103
);

console.log(reservation103);


// 4. Montant total des réservations confirmées avec reduce()
const montantTotal = reservations
    .filter(reservation => reservation.statut === "Confirmée")
    .reduce((total, reservation) => {
        return total + reservation.montant;
    }, 0);

console.log(montantTotal);


// 5. Vérifier si toutes les réservations sont confirmées avec every()
const toutesConfirmees = reservations.every(
    reservation => reservation.statut === "Confirmée"
);

console.log(toutesConfirmees);


// 6. Clients et destinations avec map()
const clientsDestinations = reservations.map(
    reservation => ({
        client: reservation.client,
        voyage: reservation.destination
    })
);

console.log(clientsDestinations);