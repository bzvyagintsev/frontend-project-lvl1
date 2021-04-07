import readlineSync from 'readline-sync';

const init = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
}

export { init };
