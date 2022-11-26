/**
 * Variáveis são mutáveis
 * E permitem salvar informações na memória
 * Em tempo de execução do código
 */

// let é a forma mais moderna de criar variáveis
let nome = 'Henrique'; // Declaração e inicialização da variável

// var é a forma mais antiga de criar variáveis
var ano = 1984;

console.log(nome, 'nasceu em', ano)

/**
 * Uma variável pode ser criada sem ser inicializada
 * Ou seja, sem ter um valor atribuído
 * Por trás, o motoro do Javascript define undefined 
 * Um valor que reconhece a ausência de valor
 */
let teste; // Declaração da variável
teste = 'Qualquer valor'; // Inicialização da variável
teste = 'Valor novo'; // Altera valor da variável

/**
 * REGRAS:
 * 1) Não se pode redeclarar variáveis com let
 * Isso pararia o código na linha do erro
 * 2)Não se pode criar variáveis com palavras reservadas
 * ex: let if;
 * 3) É recomendado que variáveis ter nomes significativos
 * 4) Não se pode começar o nome de uma variável com número
 * ex: let 1nome;
 * E, iniciar, preferencialmente, com letra minúscula
 * 5) Nomes de variáveis não podem conter espaços ou traços
 * ex: let nome-cliente;
 * 6) Em casos de nomes compostos para variáveis
 * Utilizar a convenção cammelCase
 * 7) As variáveis do Javascript são case-sensitive
 * Ou seja, letras maiúsculas e minúsculas são diferenciadas
 * ex: nomeCliente != nomecliente
 * 8) Ao redeclarar uma variável, o último valor definido prevalecerá
 * 9) É recomendado utilizar LET e não VAR para variáveis
 */
let nomeCliente = "Luiz";
let nomecliente = "Otávio";

console.log(nomeCliente, nomecliente)


let sobrenome = "Manhães";
sobrenome = "Silva";

console.log(sobrenome)