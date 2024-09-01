/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
*/

const corUsuario = null;
const corPadrao = corUsuario || 'verde';

console.log(corPadrao)


const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);


console.log(a || b || c || d || e|| 'JOAO');