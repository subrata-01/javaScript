// QS-1 
let num = 43;
if (num%10){
    console.log("bad");
} else {
    console.log("good");
}

// QS-2 
let name = prompt("Enter your name : ");
let age = prompt("Enter your age : ");
// let msg = name + " is " + age + " years old";
alert(`${name} is ${age} years old`);//template literals.


// QS-3 
let quarter = 2;
switch(quarter){
    case 1:
        console.log("january, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("enter valid input.");   
}

// Qs-4 
let str = "Apple";
if((str[0]==="A" || str[0]==="a") && str.length>5){
    console.log("This is a golden string.");
} else {
    console.log("this is not a golden string.");
}

// QS-5 
let a = 3;
let b = 15;
let c = 9;
if (a>b && a>c){
    console.log(`${a} is largest.`);
} else if (b>c && b>a){
    console.log(`${b} is largest.`);
} else {
    console.log(`${c} is largest.`);
}

// QS-6 
let num1 = 2;
let num2 = 47857;
if (num1%10 === num2%10){
    console.log(`${num1} and ${num2} both have same last digit.`);
} else {
    console.log(`${num1} and ${num2} both have not same last digit.`)
}