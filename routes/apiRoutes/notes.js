const router = require('express').Router();
const path = require('path');

router.get('db', (req, res) => {
    res.sendFile(__dirname, '../public/notes.html');
});