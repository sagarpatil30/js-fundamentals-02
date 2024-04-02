// It is the reusable code which we can use over and over.


//function with its name test
function test(){
    console.log('hi Function');  //this is function body
}
test()
test()
test() //calling the function or invoking



// apple and pineapple are the parameters
function fruitNames(apple,pineapple){
console.log(apple,pineapple);
const juice = `juice with ${apple} apples and ${pineapple} pineapples`
return juice;
}
console.log(fruitNames(2,3));
// 2 and 3 are the arguments

const juicedrink = fruitNames(2,3);
console.log(juicedrink);

const onlyApple = fruitNames(3,0)
console.log(onlyApple);

