const { z } = require('zod');

// Ez mondja meg a gépnek, hogy mi számít érvényes adatnak
const TermekSchema = z.object({
    nev: z.string().min(3, "Legalább 3 betű legyen a név!"),
    ar: z.number().positive("Az ár csak pozitív szám lehet!")
});

module.exports = { TermekSchema };
