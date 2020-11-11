//Flight booking fullname function
function getFullname(firstname,lastname,useFormalName){
    if(firstname === "" || lastname === ""){
        return "Please enter the first name and last name,It cannot be null/empty.";
    }
    if(useFormalName){
        const formalName = "Lord";
        return "The full name is: " + formalName + " " + firstname + " " +lastname;
    }else{
        return "The full name is: " + firstname + " " +lastname;
}
}
const fullname1 = getFullname("","");
const fullname2 = getFullname("Murali","Rajendran",true);
const fullname3 = getFullname("Rithvik","Murali",false);
const fullname4 = getFullname("sandhana","Ravi");
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);


//Event application
const day = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = weekday[day.getDay()];
const eventWillBeHeldInDays = 2;

function getEventWeekday(eventDay){
    const result = ((day.getDay() + eventDay)+7)%7;
    return weekday[result];
}
console.log("Today is " + today + " and the event is in " + eventWillBeHeldInDays + " days." + "Therefore the event will be held on a " + getEventWeekday(eventWillBeHeldInDays) + ".");

//Weather wear
const temperature = 30

function wearClothesBasedOnTemperature(temp){
    if(temp>=20){
        return "Shorts and T-Shirts"; 
    }else if(temp>=10){
        return "Sweaters and Jeans";
    }else if(temp>=1){
        return "Winter Jackets and Coats";
    }else{
        return "Scarf,Warm glooves and a knit headband and winter jackets";
    }}
const clothesToWear = wearClothesBasedOnTemperature(temperature);
console.log("You should wear " + clothesToWear + " during " + temperature + " degree celsius temperature.");

// Student manager
const class07Students = [];
function addStudentToClass(studentName) {
    if(studentName === " "){
        console.log("You cannot add an empty string to a class.");
    }else if(class07Students.includes(studentName)){
        console.log("Student " + studentName + " is already in the class.");
    }else if(studentName === "Queen Margrethe II"){
        class07Students.push(studentName);
    }else if (class07Students.length>=6){
        console.log("Cannot add more students to class 07.");
    }else{
        class07Students.push(studentName);
        return class07Students;
    }
}
function getNumberOfStudents() {
    return class07Students.length;
}
addStudentToClass("Sandhana");
addStudentToClass("Saravanan");
addStudentToClass("Rithvik");
addStudentToClass("Ravi");
addStudentToClass("Selvi");
addStudentToClass("Arun");
addStudentToClass("Queen Margrethe II");
console.log(class07Students);
console.log("The number of students in the class is "+ getNumberOfStudents());

//Candy helper

const boughtCandyPrices = [];
let totalPrice = 0;
const amountToSpend = Math.round(Math.random() * 100) ;

function addCandy(candyType,weight){
    let price;
    switch(candyType){
    case "sweet":
        price = weight*0.5;
        boughtCandyPrices.push(price);
        break;
    case "Chocolate":
        price = weight*0.7;
        boughtCandyPrices.push(price);
        break;
    case "Toffee":
        price = weight*1.1;
        boughtCandyPrices.push(price);
        break;
    case "Chewing-gum":
        price = weight*0.03;
        boughtCandyPrices.push(price);
        break;
    }
}
addCandy("sweet",20);
addCandy("Chocolate",50);
for(i=0; i<boughtCandyPrices.length; i++){
    totalPrice += boughtCandyPrices[i];
}
function canBuyMoreCandy(){
    if(totalPrice<amountToSpend){
        return true;
    }else{
        return false;
    }
}
if(canBuyMoreCandy()){
        console.log("The amount to spend is " + amountToSpend + " and " + "The amount you spent is " + totalPrice + " So, You can buy more, so please do!");
    }else{
        console.log("The amount to spend is " + amountToSpend + " and " + "The amount you spent is " + totalPrice + " So,enough candy for you!");
}















