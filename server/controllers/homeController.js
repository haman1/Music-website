// import the models
const Events = require('../models/Events');
const Testimonials = require('../models/Testimonials');

exports.homeInformation = async (req, res) => {
    const promises = [];
    promises.push( Events.findAll({limit: 3}) );
    promises.push( Testimonials.findAll({limit: 3}) )
    // pass to the promise
    const [events, testimonials] = await Promise.all(promises);

    res.render('index', {
        pageTitle : 'Home',
        className : 'home',
        events,
        testimonials
    });
}