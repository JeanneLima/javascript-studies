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

/**
 * Para não dar erro em strings que precisam de aspas dentro de seu texto é possível?
 * - Escapar caracter através de barra invertida (ex: \\, \",...)
 * - Colocar aspas diferentes no conteúdo interno em relação às usadas para abrir e fechar a string
 */
let stringExemploUm = "Um \"texto\"";
let stringExemploDois = 'Um "texto"';
let stringExemploTres = 'O rato roeu a roupa do rei de roma';
let stringExemploQuatro = 'Olá, seres humanos';

/**
 * Uma característica de strings é que são indexadas (tem índices começando pelo 0)
 * É possível iterá-las
 */
console.log('Pegando segundo caracter da string via índice', stringExemploUm[1]); // "m"

console.log('Pegando segundo caracter da string via método nativo', stringExemploUm.charAt(1)); // "m"

console.log('Passando índice inválido de string ', stringExemploUm[10]); // undefined

console.log('Passando índice inválido de string via método nativo ', stringExemploUm.charAt(-1)); // ''

// Existem diversos modos de concatenar strings
console.log(stringExemploUm.concat(' de exemplo', ' ', '!'));

console.log(stringExemploUm + ' de exemplo' + ' ' + '!');

console.log(`${stringExemploUm} de exemplo !`);

/**
 * Também é possível verificar em qual índice começa um trecho da string
 * O primeiro parâmetro do método indexOf() diz respeito ao valor a ser procurado
 * O segundo, a partir de qual index
 * Já o método lastIndexOf() faz a mesma coisa, mas começando pelo final da string indo até o início
 */
 
console.log(stringExemploUm.indexOf('texto')); // 4

console.log(stringExemploUm.indexOf('Texto')); // -1 (inexistente na string)

console.log(stringExemploUm.indexOf('Um', 4)); // -1 (inexistente na string)

console.log(stringExemploUm.lastIndexOf('Um', 4)); // 0

/**
 * Expressões regulares são aceitas por alguns métodos, como: replace(), search() e match()
 */
console.log(stringExemploUm.match(/[a-z]/g)); // retorna array de letras minúculas encontradas

console.log(stringExemploUm.search(/t/)); // retorna index da primeira letra t encontrada

console.log(stringExemploUm.replace(/Um/, 'Outro')); // retorna 'Outro "texto"'

console.log(stringExemploUm.replace('Um', 'Outro')); // retorna 'Outro "texto"'

console.log(stringExemploUm.replace('t', '?')); // retorna 'Um "?exto"'

console.log(stringExemploUm.replace(/t/, '?')); // retorna 'Um "?exto"'

console.log(stringExemploUm.replaceAll('t', '?')); // retorna 'Um "?ex?o"'

console.log(stringExemploUm.replace(/t/g, '?')); // retorna 'Um "?ex?o"'

// Para saber o tamanho de uma string, basta acessar seu atributo length
console.log(stringExemploUm.length);

/**
 * Com o método slice() é possível retornar o valor de uma parte da string, sendo uma alternativa melhor e com menos código que substring()
 * Sendo o primeiro parâmetro onde começa
 * E o segundo onde termina
 * Se passado número negativo, será contado o valor subtraído do tamanho da string
 */
console.log(stringExemploUm.slice(4, 9)); // texto

console.log(stringExemploUm.slice(-6)); // texto"

console.log(stringExemploUm.slice(-6, stringExemploUm.length - 1)); // texto

console.log(stringExemploUm.substring(stringExemploUm.length - 6, stringExemploUm.length - 1)); // texto

/**
 * O método split() pode ser usado para retornar um array dividindo o conteúdo da string a partir do parâmetro passado sem incluí-lo no resultado
 * Se passado um segundo parâmetro, esse será usado para limitar a quantidade de resultados
 */

console.log(stringExemploTres.split(' ')); // ['O', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei',   'de', 'roma']

console.log(stringExemploTres.split(' ', 2)); // ['O', 'rato']

console.log(stringExemploQuatro.split(',')); // ['Olá', ' seres humanos']

// Também é posível transformar os caracteres das strings em caixa alta ou baixa
console.log(stringExemploDois.toLocaleUpperCase()); // UM "TEXTO"

console.log(stringExemploDois.toLocaleLowerCase()); // um "texto"

/**
 * Existem diversos outros métodos que podem ser usados no Javascript, por exemplo, com strings
 * E para conhecê-los é possivel ler documentações como de:
 * - W3 Schools: https://www.w3schools.com/js/js_string_methods.asp
 * - Mozila: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
 * - ECMAScript: https://262.ecma-international.org/5.1/
 */