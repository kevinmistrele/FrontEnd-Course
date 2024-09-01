module.exports = class Cachorro {
  constructor(nome) {
    this.nome = nome;
  }

  latir() {
    console.log(`${this.nome} está fazendo au au`);
  }
};

module.exports = class Gato {
  constructor(nome) {
    this.nome = nome;
  }

  miar() {
    console.log(`${this.nome} está fazendo miau`);
  }
};  
