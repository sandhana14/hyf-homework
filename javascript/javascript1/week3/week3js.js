//Item array removal
const names = ["Peter","Ahmad","Yana","kristina","Rasmus","Samuel","katrine","Tala"];
const nameToRemove = "Ahmad";
for(let b=0; b<names.length; b++){
  if(names[b] === nameToRemove){
    names.splice(b,1);
}
}
console.log(names);

//When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function findTime(travelInformation){
  const decimalTime = (travelInformation.destinationDistance)/(travelInformation.speed);
  const hrs = parseInt(Number(decimalTime));
  const min = Math.round((Number(decimalTime)-hrs) * 60);
  const sec = Math.round((((Number(decimalTime)-hrs) * 60)-min)*60);
  const clocktime = hrs + " hours "+ min + " minutes and " + sec + " seconds";
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
  for(let i=0;i<seriesDurations.length;i++){
    const seriesDurationInTotalNumberOfHours = seriesDurations[i].days*24+seriesDurations[i].hours+(seriesDurations[i].minutes)/60;
    const calculation = (seriesDurationInTotalNumberOfHours/averageLifespanOf80YearsInHours)*100;
    console.log(seriesDurations[i].title + " took " + calculation.toFixed(3) + " % of my life");
    total += calculation;
  }
  console.log("In total that is " + total.toFixed(3)+" % of my life");
}
logOutSeriesText();

//NOnoN0nOYes (Note taking app)
const notes = []; 

function saveNote(content,id){
notes.push({content,id});
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Do rest", 3);
console.log(notes);

//Retrieving the content which is relevant to the id
function getNote(id){
for(let j=0;j<notes.length;j++){
if(notes[j].id === id){
  console.log(notes[j]);
  }else if(typeof id !== "number" || typeof id === null || typeof id === undefined){
    console.log("Id should be a number");
  }
}
}
const firstNote = getNote(3);

//Log out the formatted notes with content and id.
function logOutNotesFormatted() {
  for(let k=0;k<notes.length;k++){
    const result = "The note with id:"+ " " + notes[k].id +", has the following note text: " + notes[k].content +"."
    console.log(result);
}
}
logOutNotesFormatted();

//Delete the notes which is respected to an id
function deleteNote(id){
  for(let l=0; l<notes.length; l++){
    if(notes[l].id === id){
      notes.splice(l,1);
      }
    }
    console.log(notes);
}
deleteNote(1);

//CactusIO-interactive (Smart phone usage app)
const activities = [];
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date = (today.toLocaleDateString("en-US",options));

function addActivity(activity,duration){
  activities.push({date,activity,duration});
}
addActivity("Youtube",20);
addActivity("Facebook", 30);
addActivity("Google", 70);
console.log(activities);


let totalNumberOfActivities=0;
let totalDuration = 0;
const usageLimit = 100;

function showStatus(activities){
  for(let a=0;a<activities.length;a++){
    totalNumberOfActivities += 1;
    totalDuration += activities[a].duration;
    }
    
console.log(`"You have added ${totalNumberOfActivities} activities. They amount to ${totalDuration} min. of usage"`);
if(totalDuration>usageLimit){
  console.log( "You have reached your limit, no more smartphoning for you!"); 
}
}
if(activities.length === 0 || activities === null || typeof activities === undefined){
    console.log("Add some activities before calling showStatus");  
}else{
showStatus(activities);
}

function userHasSpentTheMostTimeOnActivity(){
  const maximumTime = Math.max.apply(Math, activities.map(x => x.duration));
  for(let p=0;p<activities.length;p++){
  if(activities[p].duration === maximumTime){
    console.log("The user has spent the most time on " + activities[p].activity);
    }
  }
}
userHasSpentTheMostTimeOnActivity();

