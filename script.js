
function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
document.bmiForm.meaning.value = "That you are too thin.No matter u are looking good;"
}
if(finalBmi > 18.5 && finalBmi < 25){
document.bmiForm.meaning.value = "That you are healthyand awesome."
}
if(finalBmi > 25){
document.bmiForm.meaning.value = "That you have overweight.no problem u are looking good"
}
}
else{
alert("Please Fill in everything correctly")
}
}