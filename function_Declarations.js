//Function Declarations 
function birthYear(age){
return 2024 - age
}
console.log(birthYear(1999));

function laptop(rate){
    return 10000 + rate;
}
console.log(`the rate of laptop is ${laptop(30000)}`);

//Anonymous Function || Function expression
const table = function(tablePrice){
    return  2000 - tablePrice;
}
const table1 = table(800)
console.log(table1);
