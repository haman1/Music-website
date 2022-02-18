const Events = require('../models/Events');

exports.displayEvents =  async (req, res) => {
   const events = await Events.findAll();
   res.render('events', {
       pageTitle: 'Upcoming Events',
       events
   });
        
   
}

exports.displayEvent =  async(req, res) => {
   const event = await  Events.findByPk(req.params.id)
      res.render('event', {event})
 }