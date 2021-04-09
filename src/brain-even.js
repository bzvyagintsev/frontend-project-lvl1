import readlineSync from 'readline-sync';

const MIN = 1;
const MAX = 100;
const getRandomInt = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (number) => number % 2 === 0;
const isValidInput = (value) => value === 'yes' || value === 'no';
const boolToString = (value) => (value ? 'yes' : 'no');

const init = () => {
  let score = 0;
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (score < 3) {
    const number = getRandomInt(MIN, MAX);
    const correct = boolToString(isEven(number));

    console.log(`Question: ${number}`);

    const input = readlineSync.question('Your answer: ');

    if (isValidInput(input) && correct === input) {
      score += 1;
      console.log('Correct!');
    } else {
      score = 0;
      console.log(`${input} is wrong answer ;(. Correct answer was '${correct}' \nLet's try again, ${name}!`);
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default init;
