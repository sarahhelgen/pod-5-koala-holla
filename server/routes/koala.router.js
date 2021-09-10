const { Router } = require('express');
const express = require('express');
const { Pool } = require('pg');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST
koalaRouter.post('/', (req,res) => {
    const koalaId = req.body;
    const queryText = `
        INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes") 
        VALUES ( $1, $2, $3, $4, $5 )
    `;

    pool.querty(queryText, [
        koalaId.name,
        koalaId.gender,
        koalaId.age,
        koalaId.ready_to_transfer,
        koalaId.notes,
        
    ]).then((results) => {
        res.send(200);
    }).catch((error) => {
        res.send(500);
    });
});

// PUT


// DELETE

module.exports = koalaRouter;