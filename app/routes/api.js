module.exports = function(app) {
    app.get('/api/lang', function(req, res) {
        // Check endpoint called with appropriate param.:
        if(!req.query.lang) {
            res.status(500).send();
            return;
        }

        try {
            var lang = require('../i8n/' + req.query.lang);
            res.send(lang); // `lang ` contains parsed JSON
        } catch(err) {
            res.status(404).send();
        }
    });
};