//Startup name generator.
let firstWord = ["Easy","Awesome","Corporate","Idea","Qualified","Omega","Smart","Expression","Sky","Wise"];
let secondWord = ["Corporation","World","Enterprise","Arrow","Truth","Invest","Path","Consumer","Point","Frame"];
let startupName;
const randomNumberForFirstWord = Math.floor(Math.random() * 10) + 0;
const randomNumberForSecondWord = Math.floor(Math.random() * 10) + 0;


startupName  = firstWord[randomNumberForFirstWord] + " " + secondWord[randomNumberForSecondWord];

console.log('\"'+ "The startup: " + '\"' + startupName + '\"'  + " contains " + startupName.length + " characters." + '\"');

