const { Router } = require('express');
const express = require('express');
const { Pool } = require('pg');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
koalaRouter.get('/', (req,res) => {
    const queryText = 'SELECT * FROM "koalas";';

    pool.query( queryText ).then(( results ) => {
        res.send( results.row );

    }).catch((error) => {
        console.log('There was an error for /koals GET', error);
        res.send(500);
    });
});

// POST

// PUT

// DELETE

module.exports = koalaRouter;