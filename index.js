var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var userRoutes = require('./routes/user.route');
//API petro
var petroRoutes = require('./routes/api/petro.route');
var port = 4000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

// app.get('/', function(req, res){
// 	res.render('index', {
// 		name:'Le Nhu Y'
// 	});
// });

//CORS
app.use(cors());
//
app.use('/users', userRoutes);
//API petrolimex
app.use('/api', petroRoutes);

app.listen(port, function () {
	console.log('Server listening pn port ' + port);
});