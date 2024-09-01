// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  
    Object.freeze(this);
  }
  
  const p1 = new Pessoa('Kevin', 'Mistrele');
  const p2 = new Pessoa('Chris', 'Tavares');
  
  console.log(p1);
  console.log(p2);