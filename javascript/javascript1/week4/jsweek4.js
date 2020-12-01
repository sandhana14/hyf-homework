//Voice assistant
const todo = [];
let name = "";

function getReply(inputString) {
  if (typeof inputString != "string") {
    return "Please enter your command as a string which means in quotes";
  }
  const commandWords = inputString.split(" ");
  const pushArrActivity = inputString.substring(3, inputString.length - 11);

  if (inputString) {
    const a = commandWords[2];
    const b = commandWords[4];
    let c;
    if (commandWords[3] === "+") {
      c = Number(a) + Number(b);
      return "Addition of two numbers is " + c;
    } else if (commandWords[3] === "-") {
      c = Number(a) - Number(b);
      return "Subtraction of two numbers is " + c;
    } else if (commandWords[3] === "/") {
      c = Number(a) / Number(b);
      return "Division of two numbers is " + c;
    } else if (commandWords[3] === "*") {
      c = Number(a) * Number(b);
      return "Multiplication of two numbers is " + c;
    }
  }
  switch (inputString) {
    case "Hello my name is Sandhana":
      if (name == "") {
        name = commandWords[commandWords.length - 1];
        return "Nice to meet you " + name;
      } else {
        return "You said your name " + name + " already";
      }
      break;
    case "What is my name?":
      if (name !== undefined) {
        return "Your name is " + name;
      } else {
        return "Please enter your name first.";
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
      return "Removed" + removeElement(inputString) + " from your todo.";
      break;
    case "What is on my todo?":
      return "you have " + todo.length + " todos - " + todo;
      break;
    case "What day is it today?":
      const today = new Date();
      const year = today.getFullYear();
      const monthsArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = monthsArray[today.getMonth()];
      const date = today.getDate();
      return "Today is " + date + "." + " of " + month + " " + year;
      break;
    case "Set a timer for 2000 milliseconds":
      let minutes;
      let seconds;
      let milliseconds;
      if (
        commandWords[5].toLowerCase() === "minutes" ||
        commandWords[5].toLowerCase() === "minute"
      ) {
        minutes = commandWords[4];
        milliseconds = Number(minutes) * 60000;
      } else if (
        commandWords[5].toLowerCase() === "seconds" ||
        commandWords[5].toLowerCase() === "second"
      ) {
        seconds = commandWords[4];
        milliseconds = Number(seconds) * 1000;
      } else if (
        commandWords[5].toLowerCase() === "milliseconds" ||
        commandWords[5].toLowerCase() === "millisecond"
      ) {
        milliseconds = commandWords[4];
      }
      function setTimer() {
        console.log("Timer done");
      }
      console.log("Timer set for " + commandWords[4] + " " + commandWords[5]);
      setTimeout(setTimer, milliseconds);
      return "Timer is set...now wait";
      break;
    case "How many days until Christmas 2020":
      const todaysDate = new Date();
      const nextChris = new Date(2020, 11, 25);
      return (
        Math.ceil(((nextChris - todaysDate) / 86400000).toFixed(2)) +
        " days left until Christmas!"
      );
      break;
    default:
      return "None of the conditions have satisfied,please enter the required format command";
  }
  function removeElement(inputString) {
    const removeElementFromTODo = inputString.substring(6, inputString.length - 13);
    for (let i = 0; i < todo.length; i++) {
      if (todo[i] === removeElementFromTODo) {
        return todo.splice(i, 1);
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
