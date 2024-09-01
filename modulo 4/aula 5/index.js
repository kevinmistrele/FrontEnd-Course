// Global
function retornaFuncao(nome) {
    return function(sobrenome) {
      return nome + ' ' + sobrenome;
    };
  }
  
  function falaNome(nome) {
    const sobrenome = 'Mistrele';
    console.log(nome, sobrenome);
  }
  
  const funcao = retornaFuncao('Kevin');
  const funcao2 = retornaFuncao('João');
  console.dir(funcao);
  console.dir(funcao2);
  
  console.log(funcao('Mistrele'),
    funcao2('Tavares'));