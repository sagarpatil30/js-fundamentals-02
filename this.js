// THIS KEYWORD or VARIBALE 
// In JavaScript, the this keyword refers to an object.
// this keyword is the global object 
console.log(this);


function birthYear(dateofBirth){
const year = 2024 - dateofBirth;
console.log(year);
console.log(this);
}
birthYear(1999)