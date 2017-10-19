// Dependencies
var restful = require('node-restful')
var mongoose = require('mongoose')

// Shema
var productSchema = new mongoose.Schema({
    name: String,
    sky: String,
    price: Number
})

// Return model
module.exports = restful.model('Products', productSchema)