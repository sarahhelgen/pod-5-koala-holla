const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST


// PUT
koalaRouter.put('/:id', (req,res) => {
    const koalaId = req.params.id;

    const queryText = '';

    pool.query(queryText, [koalaId]).then((results) => {
        res.send(200);
        
    }).catch((error) => {
        res.send(500);
    })
})


// DELETE

module.exports = koalaRouter;