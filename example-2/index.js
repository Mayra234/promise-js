const sumar = async (a, b) => a + b;

const run = async () => {
  console.log(await sumar(10, 10));
};

run();
