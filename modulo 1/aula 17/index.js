/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Kevin',
    sobrenome: 'Mistrele'
  };
  const b = a;
  
  b.nome = 'Tavares';
  console.log(a);
  console.log(b);