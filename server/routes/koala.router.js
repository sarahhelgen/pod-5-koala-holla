const express = require('express');
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


// POST


// PUT


// DELETE

module.exports = koalaRouter;