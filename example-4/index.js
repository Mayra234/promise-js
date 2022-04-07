const sumar = async (a, b) => a + b;
const restar = async (a, b) => a - b;
const multiplicar = async (a, b) => a * b;
const dividir = async (a, b) => a / b;

const sumaPromise = sumar(10, 10);

/**
 * Ejemplo de por qué no usar then
 * Caso 1:
 */
sumaPromise.then((result) => {
  const restaPromise = restar(result, 5);
  restaPromise.then((result) => {
    const multiplicarPromise = multiplicar(result, 3);
    multiplicarPromise.then((result) => {
      const dividirPromise = dividir(result, 3);
      dividirPromise.then((result) => {
        console.log('then:', result);
      });
    });
  });
});

/**
 * Ejemplo de por qué no usar then
 * Caso 2:
 */
sumar(10, 10).then((result) =>
  restar(result, 5).then((result) =>
    multiplicar(result, 3).then((result) =>
      dividir(result, 3).then((result) => console.log('then chaining', result))
    )
  )
);

/**
 * Escribiendo lo anterior de una mejor manera con
 * async - await
 */
(async () => {
  let result = await sumar(10, 10);
  result = await restar(result, 5);
  result = await multiplicar(result, 3);
  result = await dividir(result, 3);
  console.log('async-await:', result);
})();
