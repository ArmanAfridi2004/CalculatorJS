/*Full Name 
let firstName = "Arman"
let lastName = "Afridi"
let fullName = firstName + " " + lastName

console.log(fullName)*/

/*greeting message
let pName = "Buraira"
let greetingMessage = "Hi there"

function greeting() {
    console.log(greetingMessage + ", " + pName + "!")
}
greeting()*/

/*log out 10
let myPoints = 3

function add3Points(){
    myPoints += 3
}
function remove1Point(){
    myPoints -= 1
}
add3Points()
remove1Point()
add3Points()
remove1Point()
add3Points()
console.log(myPoints)*/

/*function purchase(){
    document.getElementById("error").innerText = "Something went wrong, please try again"
}*/
let num1 = 5
let num2 = 2
const message = "Sum: "
sumEl = document.getElementById("sum-el")
sumEl.innerText = message
document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").innerText = num2
function add(){
    sumEl.innerText = message
    let sum = num1 + num2
    sumEl.textContent += sum
}
function subtract(){
    sumEl.innerText = message
    let sum = num1 - num2
    sumEl.textContent += sum   
}
function divide(){
    sumEl.innerText = message
    let sum = num1 / num2
    sumEl.textContent += sum  
}
function multiply(){
    sumEl.innerText = message
    let sum = num1 * num2
    sumEl.textContent += sum
}

