module.exports ={
    dialect: 'postgres',
    host: 'localhost',
    username: 'beto',
    password: '1233',
    database: 'api-node',
    define:{
        timestamps: true,
        underscored: false
    }
}
/*
Adicionar ao banco de dados
id integer not null pk
cep varchar(8) not null
logradouro varchar(120) not null
numero smallint not null
complemento varchar(60)
bairro varchar(60) not null
cidade varchar(60) not null
estado varchar(2) not null
IBGE varchar(8) not null
*/