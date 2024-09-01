const nome = 'Kevin';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Mistrele';
  falaNome();
}
usaFalaNome();