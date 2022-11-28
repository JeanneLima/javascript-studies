/**
 * Constantes são variáveis imutáveis
 * E permitem salvar informações na memória
 * Em tempo de execução do código
 */

/**
 * REGRAS:
 * 1) Não se pode modificar o valor de constantes
 * Elas precisam ser criadas e inicializadas desde o início
 * 2)Não se pode criar constantes com palavras reservadas
 * ex: let if;
 * 3) É recomendado que constantes tenham nomes significativos
 * 4) Não se pode começar o nome de uma variável com número
 * ex: let 1nome;
 * E, iniciar, preferencialmente, com letra minúscula
 * 5) Nomes de constantes não podem conter espaços ou traços
 * ex: let nome-cliente;
 * 6) Em casos de nomes compostos para constantes
 * Utilizar a convenção cammelCase
 * 7) As constantes do Javascript são case-sensitive
 * Ou seja, letras maiúsculas e minúsculas são diferenciadas
 * ex: nomeCliente != nomecliente
 * 8) É recomendado utilizar CONST  e não VAR para constantes
 */
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero + segundoNumero;

/** 
 * O Javascript e uma linguagem de tipagem dinâmica
 * Isso significa que seu motor consegue atribuir o tipo conforme valor preenchido
 * E para descobrí-lo, é possível utilizar o método typeof()
 */
console.log(typeof resultado)
console.log(typeof ('5' + segundoNumero))

/** 
 * O sinal + tem duas funções no Javascript:
 * Somar informações (quando number)
 * Concatenar informações (quando string)
 * OBS: Mesmo que apenas um dos valores envolvidos for string,
 * o Javascript levará todos em consideração como string também
 */
console.log(resultado);
console.log('5' + segundoNumero);

// Exercício
const nome = 'Jeanne';
const sobrenome = 'Lima';
const idade = 24;
const peso = 55;
const alturaEmM = 1.65;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = new Date().getFullYear() - idade;

/**
 * Template literals (Template strings)
 * Permite concatenar informações envolvendo todo o conteúdo com `
 * E as variáveis com  ${}
 */
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}, tem ${idade} anos, pesa ${peso}kg,
tem ${alturaEmM}m de altura e seu IMC é de ${indiceMassaCorporal}
`)