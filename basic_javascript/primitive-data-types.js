/**
 * Tipos de dados primitivos
 * No Javascript são: string, number, undefined, null, boolean, symbol
 */
const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const numeroInteiro = 10; //number
const numeroDecimal = 10.52; //number
let nomeAluno; // undefined -> não aponta para local nenhuma na memória e é atribuído pelo motor da linguagem
const sobrenomeAluno = null; // nulo -> não aponta para local nenhuma na memória e é atribuído pelo desenvolvedor
const aprovado = false; // boolean = true ou false (valor lógico), ajdua a fazer desvios condicionais

console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof numeroInteiro, numeroInteiro);
console.log(typeof numeroDecimal, numeroDecimal);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

/**
 * Tipos de dados passados por referência
 * Apontam para o valor de mesmo lugar na memória
 * Sendo assim, se alterar o valor de um, também altera o do outro
 */
let a = [1, 2];
const b = a; // Neste caso, o = serve como operador de atribuição de valor
console.log(a, b);

b.push(3);
console.log(a, b);

a = [2];
console.log(a, b);