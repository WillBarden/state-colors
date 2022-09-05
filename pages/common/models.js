const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('./sql')

const { BIGINT, INT, DECIMAL, DATE, BOOLEAN, TEXT, UUIDV4, TIME, NOW } = DataTypes

const User = sequelize.define('user', {
  id: {
    type: BIGINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  email: {
    type: TEXT,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  paranoid: true
})

User.sync({ force: true })

module.exports = { User }
