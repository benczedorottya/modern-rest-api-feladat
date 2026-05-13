const termekek = [
    { id: 1, nev: "Teszt Termék", ar: 100 }
];

const TermekRepository = {
    getAll: () => termekek,
    add: (ujTermek) => {
        const termek = { id: termekek.length + 1, ...ujTermek };
        termekek.push(termek);
        return termek;
    }
};

module.exports = { TermekRepository };
