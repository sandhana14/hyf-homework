//Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
for (let index = 0; index < names.length; index++) {
  if (names[index] === nameToRemove) {
    names.splice(index, 1);
  }
}
console.log(names);

//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function findTime(travelInformation) {
  const decimalTime =
    travelInformation.destinationDistance / travelInformation.speed;
  const hrs = parseInt(Number(decimalTime));
  const min = Math.round((Number(decimalTime) - hrs) * 60);
  const sec = Math.round(((Number(decimalTime) - hrs) * 60 - min) * 60);
  const clocktime = hrs + " hours " + min + " minutes and " + sec + " seconds";
  return clocktime;
}
const travelTime = findTime(travelInformation);
console.log(travelTime);

//Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Friends",
    days: 7,
    hours: 3,
    minutes: 20,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];
let total = 0;
const averageLifespanOf80YearsInHours = 700800;
function logOutSeriesText() {
  for (let index = 0; index < seriesDurations.length; index++) {
    const seriesDurationInTotalNumberOfHours =
      seriesDurations[index].days * 24 +
      seriesDurations[index].hours +
      seriesDurations[index].minutes / 60;
    const calculation =
      (seriesDurationInTotalNumberOfHours / averageLifespanOf80YearsInHours) *
      100;
    console.log(
      seriesDurations[index].title +
        " took " +
        calculation.toFixed(3) +
        " % of my life"
    );
    total += calculation;
  }
  console.log("In total that is " + total.toFixed(3) + " % of my life");
}
logOutSeriesText();

//NOnoN0nOYes (Note taking app)
const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Do rest", 3);
console.log(notes);

//Retrieving the content which is relevant to the id
function getNote(id) {
  for (let index = 0; index < notes.length; index++) {
    if (notes[index].id === id) {
      console.log(notes[index]);
    } else if (
      typeof id !== "number" ||
      typeof id === null ||
      typeof id === undefined
    ) {
      console.log("Id should be a number");
    }
  }
}
const firstNote = getNote(3);

//Log out the formatted notes with content and id.
function logOutNotesFormatted() {
  for (let index = 0; index < notes.length; index++) {
    const result =
      "The note with id:" +
      " " +
      notes[index].id +
      ", has the following note text: " +
      notes[index].content +
      ".";
    console.log(result);
  }
}
logOutNotesFormatted();

//Delete the notes which is respected to an id
function deleteNote(id) {
  for (let index = 0; index < notes.length; index++) {
    if (notes[index].id === id) {
      notes.splice(index, 1);
    }
  }
  console.log(notes);
}
deleteNote(1);

//CactusIO-interactive (Smart phone usage app)
const activities = [];
const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date = today.toLocaleDateString("en-US", options);

function addActivity(activity, duration) {
  activities.push({ date, activity, duration });
}
addActivity("Youtube", 20);
addActivity("Facebook", 30);
addActivity("Google", 70);
console.log(activities);

let totalDuration = 0;
const usageLimit = 100;

function showStatus(activities) {
  for (let index = 0; index < activities.length; index++) {
    totalDuration += activities[index].duration;
  }
  console.log(
    `"You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage"`
  );
  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}

if (activities.length === 0) {
  console.log("Add some activities before calling showStatus");
} else {
  showStatus(activities);
}

function userHasSpentTheMostTimeOnActivity() {
  const maximumTime = Math.max.apply(
    Math,
    activities.map((x) => x.duration)
  );
  for (let index = 0; index < activities.length; index++) {
    if (activities[index].duration === maximumTime) {
      console.log(
        "The user has spent the most time on " + activities[index].activity
      );
    }
  }
}
userHasSpentTheMostTimeOnActivity();
