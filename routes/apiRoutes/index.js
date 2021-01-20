const router = require('express').Router();
const path = require('path');
const db = require('../../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { findById, deleteId } = require('../../lib/notes.js');

router.get('/notes', (req, res) => {
    res.json(db);
});

// uuid module which posts notes
router.post('/notes', (req, res) => {
    console.log(req.body);

    db.push(req.body);
    req.body.id = uuidv4();
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        
        JSON.stringify(db , null, 2)
    );

    res.json(req.body);
});

// function to delete notes
router.delete('/notes/:id', (req, res) => {    
    const note = findById(req.params.id, db);

    if (note) {
        deleteId(note, db)
        fs.writeFileSync(
            path.join(__dirname, '../../db/db.json'),
            JSON.stringify(db, null, 2)
        );
        res.send('Note deleted!')
    } else {
        res.sendStatus(404);
    };
});

module.exports = router;