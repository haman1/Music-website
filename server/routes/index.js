const express = require('express');
const router = express.Router();

//import models
const Events = require('../models/Events');
const Testimonials = require('../models/Testimonials');

//import controllers
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const eventController = require('../controllers/eventController');
const testimonialController = require('../controllers/testimonialController');


module.exports = function(){
    
    router.get('/', homeController.homeInformation);
    router.get('/about', aboutController.aboutInformation);
    router.get('/events',  eventController.displayEvents);
    router.get('/events/:id', eventController.displayEvent );
    router.get('/testimonials',  testimonialController.displayTestimonials);
    router.post('/testimonials', testimonialController.addTestimonial);

    return router;
}