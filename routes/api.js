var express = require('express');
var router = express.Router();
var Model = require('../Models/person');

router.get('/person', function(req, res) {
    Model.find({}, function(err, resource) {
        if (err) {
            res.send(err).status(500);
        } else {
            res.send(resource).status(200);
        }
    });
});

router.post('/person', function(req, res) {
    var person = new Model(req.body);
    person.save(function(err, resource) {
        if (err) {
            res.send(err).status(500);
        } else {
            res.json(resource).status(200);
        }
    });
});
module.exports = router