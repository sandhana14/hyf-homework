//Spirit animal name generator

const spiritAnimalArray = ["The Butterfly","The Spider","The Crow","The Owl","The Hummingbird","The Hawk","The Grasshopper","The Eagle","The fullmoon wolf","The Arabian Horse"];

const button_tag = document.getElementById("button");
const button_tag_1 = document.getElementById("button1");
const result_value = document.getElementById("result");
const randomSpiritAnimalArray = Math.floor(Math.random() * 10);
const h2_error_tag = document.createElement("h2");
document.body.append(h2_error_tag);

const getUserName = function(){
  const spirit_name = document.getElementById("fname").value;
  if(spirit_name !== ""){
    h2_error_tag.style.display ="none";
    result_value.innerHTML = spirit_name + " - " + spiritAnimalArray[randomSpiritAnimalArray] ;
}else{
    h2_error_tag.innerHTML ="Please enter the name in the input field."
  }
}

const getUserNameForSecondButton = function(){
  const randomSpiritAnimalArray1 = Math.floor(Math.random() * 10);
  const spirit_name = document.getElementById("fname").value;
  result_value.innerHTML = spirit_name + " - " + spiritAnimalArray[randomSpiritAnimalArray1] ;
  }
  
const input_field = document.getElementById("fname");
const select_option = document.getElementById("mySelectedOptions");

function myFuction(){
const select_element = document.getElementById("mySelectedOptions");
const value = select_element.options[select_element.selectedIndex].value;
if(value === "clicks"){
  button_tag.addEventListener('click', getUserName)
  button_tag_1.addEventListener("click",getUserNameForSecondButton);
}else  if(value === "hovers"){
  input_field.addEventListener('mouseover',getUserName);
  button_tag_1.addEventListener('click',getUserNameForSecondButton);
}else if(value === "input"){
  input_field.addEventListener('keydown',getUserName);
  button_tag_1.addEventListener('click',getUserNameForSecondButton);
}
}









