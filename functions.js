// It is the reusable code which we can use over and over.

//function with its name test
function test() {
  console.log("hi Function"); //this is function body
}
test();
test();
test(); //calling the function or invoking

// apple and pineapple are the parameters
function fruitNames(apple, pineapple) {
  console.log(apple, pineapple);
  const juice = `juice with ${apple} apples and ${pineapple} pineapples`;
  return juice;
}
console.log(fruitNames(2, 3));
// 2 and 3 are the arguments

const juicedrink = fruitNames(2, 3);
console.log(juicedrink);

const onlyApple = fruitNames(3, 0);
console.log(onlyApple);

// function for playing game
function game(cricket, football) {
  const players = `there are  ${cricket} players for cricket, and  ${football} players for football game`;
  return players;
}
console.log(game(2, 2));
const cricketTeam = game(11, 3);
console.log(cricketTeam);

// function 
function subject(english, maths, science) {
  const study = ` ${english} english teachers,${maths} for maths, & ${science} for science`;
  return study;
}

const subjects = subject(2, 3, 4);
console.log(subjects);
