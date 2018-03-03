const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Hotel = require('./Hotel');

router.post('/', (req, res) => {
    Hotel.create({
        name: req.body.name,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        locale: req.body.locale,
        taId: req.body.taId,
        rating: req.body.rating,
        keywords: req.body.keywords,
        waterfront: req.body.waterfront,
        attractions: req.body.attractions,
        established: req.body.established
    },
    (err, hotel) => {
        if (err) return res.status(500).send('Bummer, there was a problem adding the information to the DB.');
        res.status(200).send(hotel);
    });
});

router.get('/', (req, res) => {
    Hotel.find({}, (err, hotel) => {
        if (err) return res.status(500).send('Some unknown issue finding your hotels.');
        res.status(200).send(hotel);
    });
});

router.get('/:id', (req, res) => {
    Hotel.findById(req.params.id, (err, hotel) => {
        if (err) return res.status(500).send('Something happened, we can\'t find your hotel :(');
        if (!hotel) return res.status(404).send('Your hotel isn\'t here ?');
        res.status(200).send(hotel);
    });
});

module.exports = router;
