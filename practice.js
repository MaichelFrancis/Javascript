let age = 10
if (age >= 5) {
    console.log("eligible")
} else {
    console.log("not eligible")
}

let num = 20
if (num == 20) {
    console.log("match")
} else {
    console.log("not match")
}

//odd or even
var n = 20;
if (n % 2 == 0) {
    console.log("even")
} else { console.log("odd") }


// //compare two numbers and display the largest number
var a = 60;
var b = 90;
if (a <= b) {
    console.log("largest")
}
else { console.log("smaller") }

// //calculate grade with use of given percentage
var result = prompt("enter your mark");
if (result <= 34) {
    console.log(result, "Fail")
}
else if (result <= 55) {
    console.log(result, "D Grade")
}
else if (result <= 75) {
    console.log(result, "C Grade")
} else if (result <= 85) {
    console.log(result, "B Grade")
} else if (result <= 100) {
    console.log(result, "A Grade")
}
else { console.log("Not Applicable") }

//types of triangle based on the side length
var x = 20;
var y = 15;
var z = 10;
if (x == y && y == z && z == x) {
    console.log("Equilateral triangle")
} else if (x == y || y == z || z == x) {
    console.log("Isosceles triangle")
}
else {
    console.log("Not triangle")
}

//determine the season, based on a given month
var month = parseInt(prompt("Enter your month"));
switch (month) {
    case 12:
        month = "December, Winter";
        break;
    case 11:
        month = "November, Autom";
        break;
    case 10:
        month = "October, Autom";
        break;
    case 9:
        month = "September, Autom";
        break;
    case 8:
        month = "August, Autom";
        break;
    case 7:
        month = "July, Summer";
        break;
    case 6:
        month = "June, Summer";
        break;
    case 5:
        month = "May, Summer";
        break;
    case 4:
        month = "April, Spring";
        break;
    case 3:
        month = "March, Spring";
        break;
    case 2:
        month = "February, Spring";
        break;
    case 1:
        month = "January, Winter";
        break;
    default:
        month = "Not applicable"
        break;
}
console.log(`The month and season is ${month}`)

// positive or negative
var integer = prompt("Enter your number")
if (integer > 0) {
    console.log(integer, "positive")
} else if (integer == 0) {
    console.log(integer, "zero")
} else {
    console.log(integer, "negative")
}

// three persons salary and display the minimum salary
var salary = (salary1 = 20000, salary2 = 10000, salary3 = 5000)
if (salary1 < salary2 && salary1 < salary3) {
    console.log(salary1, "minimum salary")
} else if (salary2 < salary3) {
    console.log(salary2, "minimum salary")
} else {
    console.log(salary1, "minimum salary")
}

//switch
let value = 3;
switch (value) {
    case "1":
        value = 1;
        break;
    case 1:
        value = "one";
        break;
    case 2:
        value = "two";
        break;
    case 3:
        value = "three"
        break;
}console.log(`The value is ${value}`)