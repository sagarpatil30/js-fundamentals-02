// scoping

// globalscoping
// In JavaScript, global scoping refers to variables or functions that are declared outside of any function or block of code.

function global(developer) {
  const developerAge = 2024 - developer;

  
//   function printAge() {
//     const outPut = `your age is ${developerAge}`;
//     console.log(outPut);
//   }
//   printAge();

  return developerAge;
}
const tester = "jr.tester";
global(1999);



// function scope
function functionScope() {
  const notoutside = "function scope";
  console.log(
    `${notoutside} only works inside function we cant access the variables outside this function scope`
  );
}
functionScope();
