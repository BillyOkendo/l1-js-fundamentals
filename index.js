// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
const gravity = 9.81
//printValue (gravity)

//TODO: ADD redeclarable variable
var height = 173
var height = 170
//var gravity = 10
//printValue (height)


//TODO: ADD re-assignable but not redeclarable variable
let netWorth = '$1B'
    netWorth = '$2B'
//printValue (netWorth)


// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const num = 1996;
//printValue (num)


//TODO: Create a redeclarable variable with a boolean value
//sich erinern T/F
var gender = false//true
//printValue (gender)


//TODO: Create a re-assignable variable with a string value
//all string values are enclosed in ``, "" or ''.
let complement = `you\'re looking good today`
//printValue (complement)

let city = `New`
let title = "York"
//printValue ({city} + '' + {title})



// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let fullName = city + ' ' + title
//printValue(fullName)
//printValue ()



//TODO: Interpolate string (`${}`)
let city1 = `City : ${fullName}`
let city2 =`Town: ${city} ${title}`
//printValue (city1)
//printValue (city2)


//TODO: Convert to uppercase
//printValue(fullName.toUpperCase())


//TODO: Convert to lowercase
let lower = (fullName.toLowerCase())
//printValue(fullName.toLowerCase())
//printValue(lower)

//TODO: Index a specific character
let ind1 = lower.charAt(0)
//printValue(ind1)


//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
//printValue(5===3)
//printValue(5=== '5')


//TODO: strict inequality
//console.log(5!==5)
//printValue(5!==3)


//TODO: loose equality
//printValue(5 == '5')


//TODO: loose inequality
//printValue( 5 != '3')


//TODO: greater than
//printValue (2 > 0.1)



//TODO: less than
//printValue (69 < 96 )

//TODO: greater or equal to
//printValue( 7 > 6)


//TODO: less or equal to
//printValue( 6 < 7)



// 5.0 CONTROL FLOW
// TODO: if-else statement
// syntax: if(boolean condition) {code goes here} else {more code}

const amount =25
if (amount > 100){
    //printValue( 'You\'re rich')
}

//two options
//if (amount > 100){
    //printValue( 'You\'re rich')
 else {
    //printValue( 'You\'re poor')
}

//multiple options
if (amount > 99){
    //printValue("Almost there")
}else if (amount < 20) {
    //printValue('Gotta get working')
}else if (amount > 1000){
    //printValue('You\'re a Billionaire')
}

//TODO: switch-case
//GRADES [A, B, C, D]

const GRADES = 'A'

//swicth syntax
//switch(variable){
 //   case option:
 //       code
 //       break;
 //   case option2:
 //       code
 //       break;
 //       default (if it doesn't meet the mentioned conditions)
 //       code
// }

swicth (grade) {
    case 'A':
        printValue('Well Done')
        break;
    case 'B':
        printValue('Good')
        break;
    case 'C':
        printValue('Try harder')
        break;
}





