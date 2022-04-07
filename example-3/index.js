const sumar = async (a, b) => a + b;

//IIFE --> Immediately invoked function expression
(async () => {
  console.log(await sumar(10, 10));
})();
