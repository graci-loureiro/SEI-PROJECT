function init() {

//variables

let colours = [1, 2, 3, 4]
//let peg = 
let randomColour = null
//square ?
//smlpeg ?
let newArray = [] 
let userArray = [] 
//elements

//const firstArray = [red, blue, green, yellow]
//console.log('array', firstArray)

//const nextArray

  //querySelectors
const peg = document.querySelectorAll('#peg')
//const getElementById('')

//functions

//add in the list arrays, the colour you picked by a click
  //add.ClickEvent (click, button)
  //how do I make it appear in the array 1, or 2, and then 3...?

function createRandomArray () {
  const randomNumber = Math.floor(Math.random() * colours.length)
  console.log (randomNumber)
  return randomNumber
}


function createArray () {
  for (let i = 0; i < 4; i++) {
    newArray.push(colours[createRandomArray()])
  }
}

createArray()
console.log(newArray)

document.getElementById('peg').addEventListener('click', newArray() {
  document.getElementByTag('button').innerHTML = '';
};



function checkArrays() {
  if (userArray===newArray) {
    window.alert = 'you are a mastermind!'
  }
  else {
    window.alert = 'try again'
  }
  //go to next array
  console.log()
}

/*
colours.forEach(colourFunction);

function colourFunction(colours) {
  document.getElementById('peg').innerHTML = 
}

document.getElementById('button').addEventListener('click', colourFunction() {
  document.getElementById("demo").innerHTML = //colour it!
});

function rand_till(n){
  //  if a = 6, f-i outputs a random one from a set of integers from 0 to 5.
 var aa=Math.random();
 var aaa = Math.floor(aa*n);
 if (aaa == n) {aaa=0;}  
 return Math.floor(aa*n);  
 }


function check (event) //function triggered by a click on the submit
for (let i = 0; i <= 10; i++) {
  console.log(nextArray[i])
  if (nextArray[i]===firstArray[i]) {
    clearInterval(randomColour)
    window.alert('Yay! You are a MASTERMIND!')
  }
  
  return true

  else false //go to the next array
}

.innerHTML

setInterval (() => {
  peg.
}

//events
peg.addEventListener('click', peg)
button.addEventListener('click', submit)

*/
}


document.addEventListener('DOMContentLoaded', init)