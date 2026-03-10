let peso = 75;
let altura = 1.79;
let imc = peso / (altura * altura);
console.log("1. IMC é:", imc.toFixed(2));

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("2. Fahrenheit:", fahrenheit);

let nota1 = 8;
let nota2 = 7;
let nota3 = 9;
let media = (nota1 + nota2 + nota3) / 3;
console.log("3. Média:", media);

let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;
console.log("4. a:", a, "b:", b);

const raio = 5;
let areaCirculo = Math.PI * (raio ** 2);
console.log("5. Área do círculo:", areaCirculo);

let nome = "Victor";
let sobrenome = "Gabriel";
let nomeCompleto = `${nome} ${sobrenome}`;
console.log("6. Nome completo:", nomeCompleto);

let anoNascimento = 1999;
let anoAtual = 2026;
let idade = anoAtual - anoNascimento;
console.log("7. Idade:", idade);

let valorProduto = 100;
let desconto = 20;
let precoFinal = valorProduto - (valorProduto * desconto / 100);
console.log("8. Preço final:", precoFinal);

let reais = 100;
const taxaDolar = 5;
let dolares = reais / taxaDolar;
console.log("9. Dólares:", dolares);

let numero = 10;
let antecessor = numero - 1;
let sucessor = numero + 1;
console.log("10. Antecessor:", antecessor, "Sucessor:", sucessor);

let dias = 5;
let horas = dias * 24;
console.log("11. Horas:", horas);

let valorHora = 25;
let horasMes = 160;
let salarioBruto = valorHora * horasMes;
console.log("12. Salário bruto:", salarioBruto);

let numeroPar = 7;
let resto = numeroPar % 2;
console.log("13. Resto da divisão por 2:", resto);

let contaRestaurante = 120;
let gorjeta = contaRestaurante * 0.10;
let totalConta = contaRestaurante + gorjeta;
console.log("14. Total com gorjeta:", totalConta);

let largura = 10;
let alturaRet = 5;
let perimetro = 2 * (largura + alturaRet);
console.log("15. Perímetro:", perimetro);

let metros = 3;
let centimetros = metros * 100;
let milimetros = metros * 1000;
console.log("16. cm:", centimetros, "mm:", milimetros);

let distancia = 200;
let consumoMedio = 10;
let litros = distancia / consumoMedio;
console.log("17. Litros gastos:", litros);

let salarioAtual = 2000;
let novoSalario = salarioAtual * 1.15;
console.log("18. Novo salário:", novoSalario);

let distanciaViagem = 300;
let velocidadeMedia = 100;
let tempo = distanciaViagem / velocidadeMedia;
console.log("19. Tempo de viagem:", tempo, "horas");

let contaTotal = 200;
let pessoas = 4;
let valorPorPessoa = contaTotal / pessoas;
console.log("20. Cada pessoa paga:", valorPorPessoa);

let idadeAnos = 25;
let diasVividos = idadeAnos * 365;
console.log("21. Dias vividos:", diasVividos);

let base = 10;
let alturaTri = 5;
let areaTriangulo = (base * alturaTri) / 2;
console.log("22. Área do triângulo:", areaTriangulo);

let baseNum = 2;
let expoente = 3;
let resultado = baseNum ** expoente;
console.log("23. Potência:", resultado);

let palavra = "JavaScript";
let tipo = typeof palavra;
let tamanho = palavra.length;
console.log("24. Tipo:", tipo, "Comprimento:", tamanho);

let custo = 50;
let margem = 30;
let precoVenda = custo + (custo * margem / 100);
console.log("25. Preço de venda:", precoVenda);