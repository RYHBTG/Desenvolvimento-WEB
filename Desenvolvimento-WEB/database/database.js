const Sequelize = require('sequelize');
const config = require('../config/database');

const endereco = require('../models/endereco');

const connection = new Sequelize(config);

endereco.init(connection)
endereco.associate(connection.models)

module.exports = connection;