let ride
function scuberGreetingForFeet (someNumber){
  let greeting
  if(someNumber <= 400){
    greeting = "This one is on me!"
  }
  if(someNumber > 2000){
    greeting = 'I will gladly take your thirty bucks.'
  }
  if(someNumber > 2500){
    greeting = "No can do." 
  }
 return greeting
 }
 scuberGreetingForFeet(199)

function ternaryCheckCity(someCity){
  let message
  if (someCity === "NYC"){
    message = "Ok, sounds good."
  }
  else{
    message = "No go."
  }
  console.log(message)
  return message
  
}
ternaryCheckCity("Pittsburg")


function switchOnCharmFromTip(someTip){
  let charm
  if (someTip === "generous") {
    charm = "Thank you so much."
  }
  if (someTip === "not as generous") {
    charm = "Thank you."
  }
  if (someTip === "thanks for everything"){
    charm = "Bye."
  } 
  return charm

  }
