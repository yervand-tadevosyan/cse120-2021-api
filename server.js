const express = require('express');
const bodyParser  = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const cors = require('cors');

var dbPath = 'db.json';
var fs = require('fs');

var db_json = [];

load_db_data = function() {
    db_json = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors())

app.use(function (req, res, next) {
    res.header('Cache-Control',
               'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods',
                  'GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Max-Age', '30000');
    res.setHeader('Access-Control-Allow-Headers',
                  'Content-Type, Authorization, X-Requested-With');
    next();
});  

app.get('/', function (req, res) {
  res.render('index', {});
})

app.post('/', function (req, res) {
  res.send({"message":"Sent"});
})

app.get('/data', function (req, res) {
  res.send({"data":db_json});
})

app.post('/data', function (req, res) {
	db_json.push(req.body);
	fs.writeFileSync(dbPath, JSON.stringify(db_json));
	res.send({"message":"Added"});
})

app.listen(port, function () {
    console.log('Example app listening on port 8080!')
    load_db_data();
})

app.get('*', function(req, res) {
        res.status(404).send('Bad/Default Route.');
});
