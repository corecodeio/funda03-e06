// comparacion estricta (===)
// comparacion debil (==)

// foreach
// find, map, reduce

const a = [10, 90, 45, 30, 1000];

// Recorer arreglo
for (let i = 0; i < a.length; i++) {
  // Ejecutar logica sobre cada elemento del arreglo
  console.log(`[${a[i]}, ${i}]`);
  // if (a[i] % 2 === 0) {
  //   console.log(a[i], i);
  // }
}

a.forEach((e, victor) => {
  if (e % 2 === 0) {
    console.log(e);
  }
});

let myName = ['Y', 'osef'];
console.log(`Result${myName.join('')}`);

function test(e, victor) {
  if (e % 2 === 0) {
    console.log(e);
  }
}
// const a = [10, 90, 45, 30, 1000];
a.forEach(test);

let number = a[3];
if (number % 2 === 0) {
  console.log(number);
}

function sumf(a, b) {
  //..
  // this
  console.log(arguments);
  return a + b;
}

const suma = (a, b) => {
  //
  // this
  console.log(arguments);
  return a + b;
};

console.log(sumf(1, 1));
console.log(suma(1, 1));
