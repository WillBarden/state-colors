const { Pool } = require('pg')
const { Sequelize, Model, DataTypes } = require('sequelize')

const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env
const conn_str = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`
const sequelize = new Sequelize(conn_str)

module.exports = { sequelize }
