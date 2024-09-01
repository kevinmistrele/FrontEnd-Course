// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {

    const sobrenome = 'Mistrele';
    function criaNome(nome) {
      return nome + ' ' + sobrenome;
    }
  
    function falaNome() {
      console.log(criaNome('Kevin'));
    }
  
    falaNome();
    console.log(idade, peso, altura);
  
  })(30, 80, 1.80);