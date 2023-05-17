/**
 * Aritméticos
 * adição e concatenação (+)
 * subtração (-)
 * divisão (/)
 * multiplicação (*)
 * potenciação - elevar um número a outro (**)
 * resto da divisão (%)
 * a precedência das operações aritméticas é como na matemática, seguindo a ordem: 
 * 1) ()
 * 2) **
 * 3) *, /, %
 * 4) +, -
 * OBS: Se o cálculo expressar operações do mesmo nível conforme dado acima, serão executadas na ordem de aparecimento
 */

const numOne = 2;
const numTwo = 10;
const numString = '5';
const numDecimalString = '5.6';

console.log('adição: ', numOne + numTwo);
console.log('adição contando com conversão de string para número inteiro: ', numOne + parseInt(numString));
console.log('adição contando com conversão de string para número com casas decimais: ', numOne + parseFloat(numDecimalString));
console.log('adição contando com conversão de string para número de qualquer tipo: ', numOne + Number(numDecimalString));
console.log('concatenação: ', numOne + numString);
console.log('subtração: ', numTwo - numOne);
console.log('divisão: ', numTwo / numOne);
console.log('multiplicação: ', numOne * numTwo);
console.log('multiplicação: ', numOne ** numTwo);
console.log('resto da divisão: ', numTwo % numOne);
console.log('precedência: ', (numOne + numTwo) *  numOne);

let counter = 1;
counter++; //2
++counter; //3
counter++; //4
counter++; //5

console.log('incremento usando o próprio valor: ', counter);

counter--; //4

console.log('decremento usando o próprio valor: ', counter);

/**
 * Quando o símbolo da operação está no início, faz a conta e já retorna o valor incrementado
 * Quando está no final, primeiro faz a conta desejada, retorna o valor antigo e depois incrementa o valor (melhor prática)
 */

console.log('incremento com operador no início: ', ++counter);

console.log('incremento com operador no final: ', counter++);
console.log('incremento com operador no final: ', counter);

counter += 2; // counter = counter + 2

console.log('incremento com operador de atribuição: ', counter);

counter *= 10; // counter = counter * 10

console.log('incremento com operador de atribuição: ', counter);

/**
 * NaN - Not a Number
 * Resultado de peração inválida
 */
const numThree = 7;
const name = 'Luiz';

console.log('NaN: ', numThree * name)
console.log('NaN: ', Number(name))
console.log('conversão automática do javascript de strings com número: ', numThree * numString)