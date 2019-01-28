const S = require('sequelize');
const db = require('../db');


const Item = db.define('item', {
  title: {
    type: S.STRING,
    allowNull: false,
  },
  isCompleted: {
    type: S.BOOLEAN,
    defaultValue: false,
  },
});


module.exports = Item;
