//Volumenesfera//

console.log ('Calculemos el volumen de la esfera'); // imprimir pantalla
let valor1= prompt ('Introduce el diámetro'); // imprimir y pedir dato
let radio = parseInt (valor1) / parseInt (2);// convertir valor a numerico para dividir el diametro/2
var P= 3.1416 // definir Pi
let formula = 3/4 * (P) * (radio) * (radio)* (radio); // realizar la formula de volumen
console.log ('El vomumen de la es fera es = '+formula); // imprimir resultado
