module.exports.startServer = function(PORT, PATH, CALLBACK) {
    var express = require('express'),
        bodyParser = require('body-parser'),
        path = require('path'),
        fs = require('fs'),
        app = express(),
        server = app.listen(PORT, CALLBACK);

    /*******************************************************************************************************************
     * EXPRESS CONFIG *
     ******************/


    // Define where our static files will be fetched from:
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Tell Express where our server views (Jade files) are kept.
    // Then we can do render('NAME_OF_VIEW') inside an Express route request. e.g. render('index')
    app.set('views', path.join(__dirname, 'app/views'));
    app.set('view engine', 'jade');

    /*******************************************************************************************************************
     * ROUTE CONFIG *
     ****************/

    require('./app/routes/api')(app);

    app.get('/*', function (req, res) {
        // Render index and pass route handling to Angular
        res.render('index');
    });

    app.all('/*', function(req, res) {
        // Client is lost... render error page!
        res.render('error');
    });

    console.log('Application running.');
};