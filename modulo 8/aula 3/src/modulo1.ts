export const nome = 'Joãozinho';
export const sobrenome = 'Oliveira';
export const idade = 30;

export function soma(x, y) {
  return x + y;
}

export default class Pessoa {
  nome: string;
  sobrenome: string;
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}