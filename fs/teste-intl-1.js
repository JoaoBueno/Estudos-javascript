var app        = require('express')();
var appLocales = ['de', 'en', 'fr'];

app.get('/', function (req, res) {
    var locale = req.acceptsLanguages(appLocales) || 'en';
    // ...customize the response to locale
});