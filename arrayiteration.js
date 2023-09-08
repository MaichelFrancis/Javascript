//for of
const arraydata = ["STUDID", "Name", "Fathername", "Age", "Bloodgroup"]
for (const data of arraydata) {
    console.log(data, "forof")
}

//for in
const studentdata = ["STUDID", "Name", "Fathername", "Age", "Bloodgroup"]
for (const student in studentdata) {
    console.log(student, studentdata[student], "forin")
}

//Using of String
const alpha = "maichel"
for (const letters of alpha) {
    console.log(letters, "string")
}

//Function
function myfun() {
    let a = 10, b = 12;
    c = a + b
    console.log(c, "function")
} myfun()

function welcome() {
    console.log("Hello Welcome", "function")
} welcome()

