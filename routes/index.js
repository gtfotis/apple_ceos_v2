const express = require('express');
const router = express.Router();
const ExecutivesModel = require('../models/ExecutivesModel');

router.get('/', async(req, res) => {
    const executiveData = await ExecutivesModel.getAllExecutiveData();
    res.render('template', {
        locals: {
            title: 'Apple CEOs',
            data: executiveData
        },
        partials: {
            body: 'partials/home'
        }
    })
});

module.exports = router;