console.log('Trecho de código importado.')

/**
 * Métodos do objeto window do navegador
 * Seus métodos podem ser acessados sem atribuir "window." no início, como um atalho
 * alert() exibe uma mensagem em popup nativo do navegador que ao clicar no botão retorna undefined
 * confirm() exibe uma mensagem em popup nativo do navegador contendo dois botões que retornam valor booleano conforme seleção do usuário
 * prompt() exibe um popup nativo do navegador com uma caixa de texto e dois botões retornando o valor digitado como string (caso aperte em cancelar, retorna null; se no OK com o campo vazio, retora '' empty string)
 */
alert('Mensagem'); // window.alert('Mensagem')

const shouldConfirm = confirm('Deseja realmente apagar?'); // window.confirm('Mensagem')
console.log('shouldConfirm: ', shouldConfirm)

const myName = prompt('Digite seu nome:'); // window.prompt('Mensagem')

console.log('myName: ', myName)

/**
 * Template literals permitem que coloquemos, além de variáveis, expressões
 * Mas é uma boa prática deixar o código mais explícito para facilitar a manutenção
 */

let digitNumOne = prompt('Digite um número:');
let digitNumTwo = prompt('Digite outro número:');

digitNumOne = Number(digitNumOne);
digitNumTwo = Number(digitNumTwo);

alert(`O resultado da sua conta foi: ${digitNumOne + digitNumTwo}`)