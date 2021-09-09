const { Router } = require('express');
const express = require('express');
const { Pool } = require('pg');
const koalaRouter = express.Router();

// DB CONNECTION
const pg = require('pg');

const pool = new pg.Pool({
    database: 'koala_holla',
    host: 'localhost',
    port: '5432',
    max: 10,
    idleTimeoutMillis: 30000,
});

pool.on('connect', () =>{
    console.log('PG connected to postgres!');
});

pool.on('error', (error) =>{
    console.log('unable to connect to postgres!', error );
});


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