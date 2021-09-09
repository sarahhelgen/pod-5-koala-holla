const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST
koalaRouter.post('/', (req,res) => {
    const newKoalaTenent = req.body;

    const queryText = `
            INSERT INTO "koalas" ("name", "age", "gender", "transferReady", "notes")
            VALUES ($1, $2, $3, $4, $5)
        `;

    pool.query( queryText ,[
        newKoalaTenent.name,
        newKoalaTenent.age,
        newKoalaTenent.gender,
        newKoalaTenent.transferReady,
        newKoalaTenent.notes,

    ]).then((results) => {
        res.send(200);

    }).catch((error) => {
        res.send(500);
    });
});

// PUT


// DELETE

module.exports = koalaRouter;