var express     = require('express'),
    app         = express(),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    moment		= require('moment');

var WheelCTRoutes = require('./routes/WheelAssyCycleTimeRoutes')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(WheelCTRoutes);


app.listen(3000, function () {
	console.log('Server started!');
});
