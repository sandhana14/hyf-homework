//Startup name generator.
let firstWords = ["Easy","Awesome","Corporate","Idea","Qualified","Omega","Smart","Expression","Sky","Wise"];
let secondWords = ["Corporation","World","Enterprise","Arrow","Truth","Invest","Path","Consumer","Point","Frame"];
let startupName;
const randomNumber = Math.floor(Math.random() * 10) + 0;


startupName  = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log('\"'+ "The startup: " + '\"' + startupName + '\"'  + " contains " + startupName.length + " characters." + '\"');