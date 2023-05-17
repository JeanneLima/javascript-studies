/**
 * Variáveis são mutáveis
 * E permitem salvar informações na memória
 * Em tempo de execução do código
 */

/**
 * É possível criar variáveis sem especificar se é LET ou VAR,
 * mas isso é uma péssima prática enão deve ser feito
 */
exemplo = "Declaração a ser evitada";

// let é a forma mais moderna de criar variáveis
let nome = 'Henrique'; // Declaração e inicialização da variável

// var é a forma mais antiga de criar variáveis
var ano = 1984;
var ano = 2016;

/**
 * DIFERENÇAS ENTRE VAR E LET:
 * 1) VAR permite a redeclaração de variáveis, LET não deixa e notifica o erro 
 * (corrigido no ECMASCRIPT 2015 (ES6), 
 * uma padronização do Javascript criada pela empresa ECMA International)
 */
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
 * 3) É recomendado que variáveis tenham nomes significativos
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

/**
 * Exercício
 * Aponta varA para o valor de B
 * Aponta varB para o valor de C
 * Aponta varC para o valor de A
 */


let varA = "A";
let varB = "B";
let varC = "C";

console.log("valores originais: ", varA, varB, varC);

const varATemp = varB;
const varBTemp = varC;
const varCTemp = varA;

// varA = varATemp;
// varB = varBTemp;
// varC = varCTemp;

// console.log("valores reapontados de maneira simples: ", varA, varB, varC);

[varA, varB, varC] = [varB, varC, varA];

console.log("valores reapontados de maneira rebuscada e mais nova: ", varA, varB, varC);
