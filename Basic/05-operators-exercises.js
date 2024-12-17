/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

// Declaración de variables
let a = 10;
let b = 3;

// Operaciones aritméticas
let suma = a + b;            // Suma
let resta = a - b;           // Resta
let multiplicacion = a * b;  // Multiplicación
let division = a / b;        // División
let modulo = a % b;          // Módulo (resto de la división)
let exponente = a ** b;      // Exponente (a elevado a la b)

// Incremento y decremento
let incremento = a;          // Incremento
incremento++;                // Sumar 1 al valor de "a"

let decremento = b;          // Decremento
decremento--;                // Restar 1 al valor de "b"

// Mostrar resultados
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Módulo:", modulo);
console.log("Exponente:", exponente);
console.log("Incremento:", incremento);
console.log("Decremento:", decremento);


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// Variables base
let a = 10;
let b = 3;

// Operaciones de asignación
let asignacion = a;         // Asignación simple
console.log("Asignación:", asignacion);

let sumaAsignacion = a;     
sumaAsignacion += b;        // Suma con asignación
console.log("Suma con asignación:", sumaAsignacion);

let restaAsignacion = a;    
restaAsignacion -= b;       // Resta con asignación
console.log("Resta con asignación:", restaAsignacion);

let multiplicacionAsignacion = a;
multiplicacionAsignacion *= b; // Multiplicación con asignación
console.log("Multiplicación con asignación:", multiplicacionAsignacion);

let divisionAsignacion = a;
divisionAsignacion /= b;    // División con asignación
console.log("División con asignación:", divisionAsignacion);

let moduloAsignacion = a;
moduloAsignacion %= b;      // Módulo con asignación
console.log("Módulo con asignación:", moduloAsignacion);

let exponenteAsignacion = a;
exponenteAsignacion **= b;  // Exponente con asignación
console.log("Exponente con asignación:", exponenteAsignacion);


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let a = 10;
let b = 5;
let c = "10";

// Comparación 1: Mayor que (>)
console.log("Comparación 1:", a > b); // true

// Comparación 2: Menor o igual que (<=)
console.log("Comparación 2:", b <= a); // true

// Comparación 3: Igualdad de valor (==)
console.log("Comparación 3:", a == c); // true (compara solo valor)

// Comparación 4: Desigualdad estricta (!==)
console.log("Comparación 4:", a !== c); // true (valor igual, tipo diferente)

// Comparación 5: Igualdad estricta (===)
console.log("Comparación 5:", b + b === a);


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

let a = 10;
let b = 5;
let c = "10";

// Comparación 1: Menor que (<)
console.log("Comparación 1:", a < b); // false (10 no es menor que 5)

// Comparación 2: Mayor o igual que (>=)
console.log("Comparación 2:", b >= a); // false (5 no es mayor o igual que 10)

// Comparación 3: Igualdad estricta (===)
console.log("Comparación 3:", a === c); // false (valor igual, pero tipo diferente)

// Comparación 4: Desigualdad por valor (!=)
console.log("Comparación 4:", a != 10); // false (10 es igual a 10)

// Comparación 5: Igualdad de valor (==)
console.log("Comparación 5:", a + b == c); // false (5 + 5 es 10, pero "10" no es estrictamente evaluado aquí como falsedad)


// 5. Utiliza el operador lógico and

let a = 10;
let b = 5;
let c = 15;

// Ejemplo 1: Ambas condiciones son verdaderas
console.log("Ejemplo 1:", a > b and c > a); // true && true → true

// Ejemplo 2: Una condición es falsa
console.log("Ejemplo 2:", a > b && c < a); // true && false → false

// Ejemplo 3: Ambas condiciones son falsas
console.log("Ejemplo 3:", a < b && c < a); // false && false → false

// Ejemplo 4: Comparación combinada
console.log("Ejemplo 4:", a > 0 && b > 0 && c > 10); // true && true && true → true

// Ejemplo 5: Uso con variables booleanas
let isLoggedIn = true;
let hasAccess = false;

console.log("Ejemplo 5:", isLoggedIn && hasAccess); // true && false → false



let edad = 25;
let tieneLicencia = true;

// Usamos el operador &&
if (edad >= 18 && tieneLicencia) {
  console.log("Puedes conducir.");
} else {
  console.log("No puedes conducir.");
}

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas