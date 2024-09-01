const falar = {
    falar() {
      console.log(`${this.nome} está falando.`);
    },
  };
  
  const comer = {
    comer() {
      console.log(`${this.nome} está comendo.`);
    },
  };
  
  const beber = {
    beber() {
      console.log(`${this.nome} está bebendo.`);
    },
  };
  
  const pessoaPrototype = Object.assign({}, falar, comer, beber);
  
  function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
      nome: { value: nome },
      sobrenome: { value: sobrenome }
    });
  }
  
  const p1 = criaPessoa('Kevin', 'Mistrele');
  const p2 = criaPessoa('Maria', 'Almeida');
  const p3 = criaPessoa('João', 'Silva'); 
  const p4 = criaPessoa('Pedro', 'Oliveira');
  console.log(p2);  