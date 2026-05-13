const express = require('express');
const { TermekSchema } = require('./schemas/termek.schema');
const { TermekRepository } = require('./repository/termek.repository');

const app = express();
app.use(express.json());

// 1. Alap útvonal - Itt látod a termékeket
app.get('/api/v1', (req, res) => {
    const adatok = TermekRepository.getAll();
    res.json({ 
        uzenet: "Sikeres lekérdezés a Repository-ból!", 
        adatok: adatok 
    });
});

// 2. Új termék hozzáadása validációval
app.post('/api/v1/termekek', (req, res) => {
    try {
        const validaltAdat = TermekSchema.parse(req.body);
        const ujTermek = TermekRepository.add(validaltAdat);
        res.status(201).json({ uzenet: "Termék elmentve!", termek: ujTermek });
    } catch (error) {
        res.status(400).json({ hiba: "Érvénytelen adatok!", reszletek: error.errors });
    }
});

app.listen(3000, () => console.log("Szerver fut: http://localhost:3000/api/v1"));;

