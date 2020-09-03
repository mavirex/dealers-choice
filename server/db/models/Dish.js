//for things like Sequelize.STRING
const Sequelize = require('sequelize');
const { STRING } = Sequelize;

//import your db
const db = require('../db')
//define your model
const Dish = db.define('define', {
    name: STRING
  })
//define any class or instance methods

//export your model
module.exports = Dish