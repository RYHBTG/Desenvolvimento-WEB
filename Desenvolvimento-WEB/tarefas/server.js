const express = require('express')
const axio = require('axios');
const { default: axios } = require('axios');
const { connected } = require('process');

const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('Hello world')    
});

app.get('/consulta-cep/:cep', async (req,res) => {
    const cep = req.params.cep;
    try{
        const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
        if (!cepRegex.test(cep)){
            res.status(400).send('CEP inválido. Formato: XXXXX-XXX');
            return;
        }
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
//Para iniciar apenas dê use node ./auladia09/server.js