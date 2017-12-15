var models = require('../models');
var express = require('express');
var router = express.Router();

//this is the trips_controller.js file
// =================================================================
// Routes
// =================================================================
//Redirecting user on click until saving info from API
//Get, renders volunteer opportunities
router.get('/volunteer', function(req,res) {
    res.render('trips/volunteer', {
    });
});

//Get, renders flights
router.get('/flights', function(req,res) {
    res.render('trips/flights');
});

//Get, renders hotels
router.get('/hotels', function(req,res) {
    res.render('trips/hotels');
});



//Use the Trip model to find the trip search terms for the trip saved by a user.
//Where the user id is the user_id of the logged in user
//and use the include option to grab info from the User model.
//This will show the trip search terms for the trip.
router.get('/', function (req, res) {
    models.Trip.findAll({
        include: [ models.User ],
        where: {user_id: req.session.user_id}
        //then...
    }).then(function(trips) {
        //grab the user info from our req.
        //This info gets saved to req via the users-controller.js file
        res.render('index', {
            name: req.session.name,
            user_id: req.session.user_id,
            email: req.session.email,
            logged_in: req.session.logged_in,
            depcity: req.session.depcity,
            destcity: req.session.destcity,
            departdate: req.session.departdate,
            returndate: req.session.returndate,
            numvol: req.session.numvol,
            itinerary: req.session.itinerary,
            trips: trips
        })
    })
});



//=================================================================================================
//Use the Trip model to create and a trip based on what's
//passed in req.body (depcity, destcity, departdate, returndate, numvol)
router.post('/create', function (req, res) {
    models.Trip.create({
        depcity: req.body.usersOrigin,
        destcity: req.body.usersDestination,
        departdate: req.body.departingDate,
        returndate: req.body.returningDate,
        numvol: req.body.volunteers,
        intinerary: req.body.itinerary,
        user_id: req.session.user_id
    })
    // connect the .create to this .then
        .then(function() {
            res.redirect('/');
        })
});

// Use the Trip model to update itinerary to move to itinerary column
// using the id of the trip (as passed in the url)
router.put('/update/:id', function (req, res) {
    models.Trip.update(
        {
            itinerary: req.body.itinerary
        },
        {
            where: { id : req.params.id }
        })
    // connect it to this .then.
        .then(function (result) {
            res.redirect('/trips');
        })
});

//Use the Trip model to delete a trip
//based on the id passed in the url
router.delete('/delete/:id', function(req,res) {
    models.Trip.destroy({
        where: {
            id: req.params.id
        }
    })
    // connect it to this .then.
        .then(function() {
            res.redirect('/');
        })
});



module.exports = router;