const {Sequelzie, DataTypes} = require('sequelize');
const sequelize = new sequelize('sqlite::memory');

class endereco extends models{}
endereco.init({
     //Atributos
     id:{
        type = DataTypes.INTEGER,
        allowNull: false,
    },
    cep:{
        type: DataTyper.STRING,
        allowNull: true,
    },
    logradouro:{
        type: DataTypes.STRING,
    },
    numero:{
        type: DataTypes.INTEGER,
    },
    complemento:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    bairro:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    cidade:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    estado:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    municipioIBGE:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{
    sequelize,
    modelName: 'endereco',
    tableName: 'enderecos',
    timestamps: true,
});

module.exports = endereco;
//utilizar o comando Create database api-node, dentro do postgres