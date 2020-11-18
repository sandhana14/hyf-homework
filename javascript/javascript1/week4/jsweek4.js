//Voice assistant
const todo=[]; 
let name = "";   

function getReply(command){
if(typeof(command) != 'string'){
    return "Please enter your command as a string which means in quotes";
} 
const commandArray = command.split(" "); 
const pushArrActivity =command.substring(3,command.length-11);

if(command){
    const a = commandArray[2];
    const b = commandArray[4];
    let c;
    if(commandArray[3] === "+"){
        c= Number(a)+Number(b);
        return "Addition of two numbers is " + c;
    }else if(commandArray[3] === "-"){
        c = Number(a)-Number(b);
        return "Subtraction of two numbers is " + c;
    }else if(commandArray[3] === "/"){
        c = Number(a)/Number(b);
        return "Division of two numbers is " + c;
    }else if(commandArray[3] === "*"){
        c = Number(a)*Number(b);
        return "Multiplication of two numbers is " + c;
    }
}
switch(command){
case "Hello my name is Sandhana":
    if(name == ""){
    name = commandArray[commandArray.length-1];
    return "Nice to meet you " + name;
    }else{
        return "You said your name " + name + " already";
    }
    break;
case "What is my name?":
    if(name !== undefined){
    return "Your name is " + name;
    }else{
    return "Please enter your name first."
    }
    break;
case "Add fishing to my todo":
    todo.push(pushArrActivity);
    return pushArrActivity + " added to your todo.";
    break;
case "Add singing in the shower to my todo":
    todo.push(pushArrActivity);
    return pushArrActivity + " added to your todo.";
    break;
case "Add dancing to my todo":
    todo.push(pushArrActivity);
    return pushArrActivity + " added to your todo.";
    break;
case "Add go shopping to my todo":
    todo.push(pushArrActivity);
    return pushArrActivity + " added to your todo.";
    break;
case "Remove singing in the shower from my todo":
    return "Removed" + removeElement(command) + " from your todo.";
    break;
case "What is on my todo?":
    return "you have "+ todo.length + " todos - "+ todo;
    break;
case "What day is it today?":
    const today = new Date();
    const year = today.getFullYear();
    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthsArray[today.getMonth()];
    const date = today.getDate();
    return "Today is " + date +"."+" of "+month+" "+year;
    break;
case "Set a timer for 2000 milliseconds":
    let minutes;
    let seconds;
    let milliseconds;
    if((commandArray[5].toLowerCase() === "minutes")||(commandArray[5].toLowerCase() === "minute")){
        minutes= commandArray[4];
        milliseconds = Number(minutes) * 60000;
    }else if((commandArray[5].toLowerCase() === "seconds")||(commandArray[5].toLowerCase() === "second")){
        seconds = commandArray[4];
        milliseconds = Number(seconds) * 1000;
    }else if((commandArray[5].toLowerCase() === "milliseconds")||(commandArray[5].toLowerCase() === "millisecond")){
        milliseconds = commandArray[4];
    }
    function setTimer(){
        console.log("Timer done");
    }
    console.log("Timer set for " + commandArray[4] +" "+ commandArray[5] );
    setTimeout(setTimer, milliseconds);
    return "Timer is set...now wait";
    break;
case "How many days until Christmas 2020":
    var todaysDate = new Date();
    var nextChris = new Date(2020, 11, 25);
    return (Math.ceil(((nextChris - todaysDate) / 86400000).toFixed(2))+
    " days left until Christmas!");
    break;
default:
    return "None of the conditions have satisfied,please enter the required format command";
}   
function removeElement(command){
    const removeElementFromTODo=command.substring(6,command.length-13);
    for(let i=0;i<todo.length;i++){
if(todo[i] === removeElementFromTODo){
return todo.splice(i,1);
}
}
}
}

console.log(getReply("Hello my name is Sandhana"));
console.log(getReply("What is my name?")); 
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add dancing to my todo"));
console.log(getReply("Add go shopping to my todo"));
console.log(getReply("Remove singing in the shower from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 12 - 2"));
console.log(getReply("what is 10 / 5"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("How many days until Christmas 2020"));
console.log(getReply("Set a timer for 2000 milliseconds"));




