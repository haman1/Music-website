const Sequelize = require('sequelize');
const db = require('../config/database');

const Events = db.define('events', {
    title: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
   image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
});

module.exports = Events;