const Sequelize = require('sequelize')
const db = require('../db')


const Chatroom = db.define('chatroom', {
  message: Sequelize.TEXT,

})


module.exports = Chatroom