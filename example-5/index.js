const printHello = async () => 'Hello';
const printMayra = async () => 'Mayra';
const printAlejandra = async () => 'Alejandra';

(async () => {
  //Esto no garantiza el orden de resolución
  printHello().then((result) => console.log(result)); //0.1
  printMayra().then((result) => console.log(result)); //0.02
  printAlejandra().then((result) => console.log(result)); //0.05

  //Promise.all si garantiza el orden de resolución
  Promise.all([printHello(), printMayra(), printAlejandra()]).then((result) =>
    console.log('then', result.join(' '))
  );
})();

(async () => {
  //Promise.all si garantiza el orden de resolución
  const result = await Promise.all([
    printHello(),
    printMayra(),
    printAlejandra(),
  ]);
  console.log('await', result.join(' '));
})();
