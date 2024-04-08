// scope
// this is a place where variables are declared or used in a structured way 
// there are 3 types of scoping in js
// 1- Global scope
// 2- Function Scope OR LOCAL SCOPE
// 3- Block Scope

// ------------------------------GLOBAL SCOPE------------------------------------------ //
// the varibales can access globally anywhere in the file as it is a GS

let global = 'globalscope';
console.log(global);

// ------------------------------FUNCTION SCOPE-----------------------------------------//
// in function varibales aren't able to access outside the function 
// this is aslo called as LOCAL SCOPE

function functionScope(){
    const funscope = 'this is function scope'
    console.log(funscope);

// accessing the global varibale here, which is accessbale everywhere.
    global = 'new global scope'
    console.log(global);
}
functionScope()

// we cant access the varibales outside the function which is called function scope
// console.log(funscope);


// ------------------------------BLOCK SCOPE-------------------------------------------//
//In block scope only LET & CONST works
// we use this basically for block

if(global !== 'globalscope'){
const test = 'blockscope'
console.log(test);
}



// scope chaining
const team = 'testingTeam'

function developers(){
    let developerRole = "Ui-developers-team"
    
    function testerTeam(){
        let testers = `this is ${developerRole} and ${team}`
        console.log(testers);
    }
    testerTeam()
}
developers()
// scope chaning is nothing but the one scope is depended on other scope 
// this is also called as varibable LOOK-UP
// only parent scope varibales can be used not child scope