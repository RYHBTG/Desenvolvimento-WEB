const { Endereco } = require('../models');

// Criação de um novo endereço
exports.createEndereco = async (req, res) => {
    try {
        const { Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE } = req.body;

        const novoEndereco = await Endereco.create({
            Cep,
            Logradouro,
            Numero,
            Complemento,
            Bairro,
            Cidade,
            Estado,
            MunicipioIBGE,
        });

        res.status(201).json(novoEndereco);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar endereço', details: error.message });
    }
};


// Leitura de todos os endereços
exports.getAllEnderecos = async (req, res) => {
    try {
        const enderecos = await Endereco.findAll();
        res.status(200).json(enderecos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar endereços', details: error.message });
    }
};


//Leitura de um endereço por ID
exports.getEnderecoById = async (req,res) =>{
    try{
        const {Id} = req.params;
        const endereco = await Endereco.findByPk(Id);
    if (!endereco){
        return res.status(404).json({error: 'Root Not Found'})
    }
    res.status(200).json(endereco);
}catch(error){
    res.status(500).json({error: 'Id Error',details: error.message})
}
};

// Actualización de um endereço
exports.updateEndereco = async (req, res) => {
    try {
      // Extract the ID and address details from the request
      const { Id } = req.params;
      const { Cep, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, MunicipioIBGE } = req.body;
  
      // Find the address by its ID
      const endereco = await Endereco.findByPk(Id);
  
      // If the address wasn't found, return a 404 error
      if (!endereco) {
        return res.status(404).json({ error: 'Endereço não encontrado' });
      }
  
      // Update the address properties from the request
      endereco.Cep = Cep;
      endereco.Logradouro = Logradouro;
      endereco.Numero = Numero;
      endereco.Complemento = Complemento;
      endereco.Bairro = Bairro;
      endereco.Cidade = Cidade;
      endereco.Estado = Estado;
      endereco.MunicipioIBGE = MunicipioIBGE;
  
      // Save the updated address
      await endereco.save();
  
      // Return the updated address with a 200 status code
      res.status(200).json(endereco);
    } catch (error) {
      // If there's an error during the update, return a 500 status code
      res.status(500).json({ error: 'Erro ao atualizar endereço', details: error.message });
    }
  };
  // Exclusão de um endereço
exports.deleteEndereco = async (req, res) => {
    try {
      const { Id } = req.params;
      const endereco = await Endereco.findByPk(Id);
      if (!endereco) {
        return res.status(404).json({ error: 'Endereço não encontrado' });
      }
      await endereco.destroy();
      res.status(204).send(); // Sem conteúdo, pois foi deletado com sucesso
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar endereço', details: error.message });
    }
  };
  
