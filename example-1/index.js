const greet = async () => 'Hello';

let x = '';

const run = async () => {
  const result = await greet();
  x = result;
  console.log(result);
};

run();
console.log(x);
