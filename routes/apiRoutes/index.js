const router = require('express').Router();
const path = require('path');
const db = require('../../db/db.json');
const fs = require('fs');

router.get('db', (req, res) => {
    res.sendFile(__dirname, '../../public/notes.html');
});

module.exports = router;