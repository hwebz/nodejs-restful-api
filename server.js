// Dependencies
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

// MongoDB
mongoose.connect(process.env.OPENSHIFT_MONGO_DB_URL || 'mongodb://localhost:27017/products-demo')
// mongoose.connection.on('error', function() {})

// Express
var app = express()

var routes = require('./routes/api')

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/api', routes)

// Start server
var port = process.env.OPENSHIFT_NODEJS_PORT || 3400,
    ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"

app.listen(port, ip, function() {
    console.log('Express server listening on %d', port)
})