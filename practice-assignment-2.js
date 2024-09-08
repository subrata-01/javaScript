
// QS-1 
let arr = [7,9,0,-2];
let n =3;
console.log(arr.slice(0,n));

// QS-2
console.log(arr.slice(-n));

// QS-3
let str = "";
if (str.length === 0){
    console.log("the string is empty.");
} else {
    console.log("the string is not empty.");
}

// QS-4
let string = "Subrata";
let index = prompt("enter the index : ");
if (string[index]===string[index].toLowerCase()){
    console.log("the charecter is lowercase.");
} else {
    console.log("the charecter is not lowercase.");
}

// QS-5
let input = prompt("enter a string : ");
console.log(`original string = ${input}`);
console.log(`string without spaces = ${input.trim()}`);

// QS-6
let newArr = [1,2,3,4,5];
let item = 10;
if (newArr.indexOf(item)!=-1){
    console.log("the element is exist in the array.");
} else {
    console.log("the element is not exist in the array.");
}