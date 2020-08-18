const EmailController = require('./controllers/EmailController');

module.exports = (app) => {
    app.post('/request-offer', EmailController.requestOffer);
    app.post('/contact-us', EmailController.contactUs);
}