const express = require('express')
const axio = require('axios');
const { default: axios } = require('axios');

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('Hello world')    
});

app.get('/consulta-cep/:cep', async (req,res) => {
    const cep = req.params.cep;
    try{
        const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
    }catch(error){
        console.error('Erro ao fazer requizição',error);
        res.status(500).send('Erro ao consultar CEP');
    }
});

app.listen(port, () => {
    console.log(`Servidor on http://localhost:${port}`)
});