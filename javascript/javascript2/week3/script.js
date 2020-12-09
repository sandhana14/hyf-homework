//1)Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
const scriptTag = document.querySelector("script");

function scriptLoaded() {
    console.log("Called after 2.5 seconds");
}

scriptTag.addEventListener("load", () => setTimeout(scriptLoaded, 2500));

//2)Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function stringToLogAfterDelayedSeconds(delay, stringToLog) {
    const milliseconds = delay * 1000;
    setTimeout(() => console.log(stringToLog), milliseconds);
}

stringToLogAfterDelayedSeconds(2, "This string logged after 2 seconds");
stringToLogAfterDelayedSeconds(1, "This string logged after 1 seconds");
stringToLogAfterDelayedSeconds(5, "This string logged after 5 seconds");

//3)Create a button in html. When clicking this button, use the function you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const buttonTag = document.getElementById("button");

buttonTag.addEventListener("click", () => stringToLogAfterDelayedSeconds(5, "Called after 5 seconds"));

//4)Create two functions and assign them to two different variables. One function logs out Earth, the other function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided parameter function. Try call the third function once with the Earth function and once with the Saturn function.

const earthLogger = () => console.log("Earth");
const saturnLogger = () => console.log("Saturn");

function planetLogFunction(callback) {
    callback();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5)Create a button with the text called "Log location". When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api

const buttonElement = document.getElementById("buttonLogLocation");
const latitudeElement = document.getElementById("paraToShowLatitude");
const longitudeElement = document.getElementById("paraToShowLongitude");


function geoLocation() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        latitudeElement.innerHTML = `This is the latitude ${latitude}`;
        longitudeElement.innerHTML = `This is the longitude ${longitude}`;
    }
    navigator.geolocation.getCurrentPosition(success);
}
buttonElement.addEventListener("click", geoLocation);

//6)Now show that location on a map using fx the Google maps api.
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 55.653, lng: 12.189 },
        zoom: 8,
    });
}

//7)Create a function called runAfterDelay. It has two parameters: delay and callback. When called the function should wait delay seconds and then call the provided callback function. Try and call this function with different delays and different callback functions

function runAfterDelay(delay, callback) {
    const delays = delay * 1000;
    setTimeout(() => callback(), delays);
}

runAfterDelay(5, () => console.log("Should be logged after 5 seconds"));

//8)Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. If a double click has been detected, log out the text: "double click!"

document.addEventListener("dblclick", () => console.log("Double click"));

//9)Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}

function logFunnyJoke() {
    console.log("I had a dream where an evil queen forced me to eat a gigantic marshmallow.\nWhen I woke up, my pillow was gone.");
}
function logBadJoke() {
    console.log("Two tomatoes walk across the street. One of them screams: 'Careful there's a truck comi...SPLASH!!!!'");
}

jokeCreator(false, logFunnyJoke, logBadJoke);
jokeCreator(true, logFunnyJoke, logBadJoke);

