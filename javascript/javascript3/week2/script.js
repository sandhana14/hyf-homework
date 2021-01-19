//Movies exercise
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
.then(response => response.json())
.then(movie =>{
    const arrayOfBadMoviesSince2000 = movie.filter(element => ((element.year>=2000)&&(element.rating<2)));
    console.log(arrayOfBadMoviesSince2000);
})
.catch((error) => console.log(error));

//Promise that resolves after set time
function delayPromise(resolveAfter){
    const setTime = 1000 * resolveAfter;
    return new Promise(resolve=>{
        setTimeout(resolve,setTime);
    })
    }
    
delayPromise(8)
    .then(() => {
        console.log("I am called asynchronously"); 
    });
    
    
async function getPromise(delay) {
    try{
        await delayPromise(delay);
        console.log("I am called asynchronously");
    }
    catch (error) {
        console.error(error);
    }
}
    
getPromise(3);

//Rewrite time
function setTimeoutPromise(delay) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), delay);
    })
}

setTimeoutPromise(3000)
    .then(() => {
        console.log("Called after 3 seconds");
    });


function getCurrentLocation() {
    return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position)=>resolve(position),()=>reject("Users location is not found"));
    })
}

getCurrentLocation()
    .then((position) => {
        console.log(position);
    })
    .catch((error) => {
        console.log("Error is " + error);
    });

//Fetching and waiting

function delay() {
    return new Promise(resolve => setTimeout(resolve,4000));
}

delay()
.then(()=>fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(err => console.log(err)))


async function getDataAfterSomeDelay() {
    try{
        await delay();
        const astronautsResponse = await fetch("http://api.open-notify.org/astros.json");
        const astronauts = await astronautsResponse.json();
        console.log(astronauts);
    }catch(error){
        console.error(error);
    }
}

getDataAfterSomeDelay();
