console.log("Hello world!");
console.log("JK College");
let a = 5;
console.log("The sum is : ",a);
let b = 2;
// let output = "you'r pay " + (a+b) + " rupees.";
// console.log(output);

// console.log("you'r pay " + (a+b) + " rupees.");

// Using back ticks.......
// let output = `you'r pay ${a+b} rupees.`;
// console.log(output);
console.log(`you'r pay ${a+b} rupees.`);

// arithmetic operations
let x = 10;
let y = 5;
console.log(x+y,x-y,x*y,x/y,x%y,x**y);

// unary operations
console.log(++x, x++ ,++x, x++);

// assignment operations
console.log(x=y);//5
console.log(x+=y);//10
console.log(x-=y);//5
console.log(x*=y);//25
console.log(x/=y);//5
console.log(x%=y);//0

// Comparision operators
console.log(5>5, 5>=5, 5<4, 5>4, 5==5, 5!=4);
let str = '10';
console.log(str==10);//compare values not type.
console.log(str===10);//compare type & value.
console.log('a'<'b', 'a'>'A', 'A'>'C', '*'<'&');

// practice question
let color = "green";
if (color=="red"){
    console.log("Stop!. color is red");
} else if (color=="yellow"){
    console.log("Slow down!. color is yellow");
} else if (color=="green"){
    console.log("Go!. color is green");
}


// Grade system . . . 
let marks = 85;
if (marks>=80){
    console.log("A+");
} else if(marks>=60){
    console.log("A");
} else if (marks>=40){
    console.log("B");
} else if(marks<40){
    console.log("F");
}

// practice question
let size = "L";
if (size==="XL"){
    console.log("price is Rs.250");
} else if (size==="L"){
    console.log("price is Rs.200");
}else if (size==="M"){
    console.log("price is Rs.100");
}else {
    console.log("price is Rs.50");
}

// switch case 
let day = 5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday fun day!");
        break;
    default:
        console.log("wrong day!");
}

// alert : display an alert msg on the web page.
alert("something went wrong.");
console.error("this is an error msg");
console.warn("this is a warning msg.");

// prompt : display a popup msg where we give an input 
let firstName = prompt("enter your first name : ");
let lastName = prompt("enter your last name : ");
let msg = "Welcome " + firstName + " " + lastName + " !";
alert(msg);