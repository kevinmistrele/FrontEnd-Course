const pessoa = {
    nome: 'Kevin',
    sobrenome: 'Mistrele',
    idade: 20,
    endereco: {
      rua: 'Biri Brasil',
      numero: 320
    }
  };
  
  // Atribuição via desestruturação
  const { nome, sobrenome, ...resto } = pessoa;
  console.log(nome, resto);