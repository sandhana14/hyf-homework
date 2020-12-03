//1)Create an array of movies containing the movies with a short title (you define what short means)
const moviesShortTitle = movies.filter(item => item.title.length<4);
console.log(moviesShortTitle);

//2)Create an array of movie titles with long movie titles
const movieLongTitle = movies.filter(item => item.title.length>40).map(item1 => item1.title);
console.log(movieLongTitle);

//3)Count the number of movies made between 1980-1989 (including both the years)
const countMoviesAnotherMethod = movies.filter(element => (element.year>=1980 && element.year<=1989)).length
console.log("The total number of movies made between 1980-1989 - " + countMoviesAnotherMethod);

//4)Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const extraKeyCalledTag = movies.filter(element =>{
    if(element.rating<4){
        return element.tag = "Bad";
    }else if(element.rating>=4 && element.rating<7){
        return element.tag = "Average";
    }else if(element.rating>=7){
        return element.tag = "Good";
    }
})
console.log(extraKeyCalledTag);

//5)Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const ratingOfTheMovies = movies.filter(element =>element.rating > 6).map(element => element.rating)
console.log(ratingOfTheMovies);

//6)Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
const totalNumberOfMoviesWithSpecificKeywords = movies.filter(element => {
    const titleArray = element.title.toLowerCase().split(" ");
    if(titleArray.includes("benjamin") ||titleArray.includes("alien")||titleArray.includes("surfer")){
        return true;
    }
}).length
console.log("Total number of movies containing the keywords " + totalNumberOfMoviesWithSpecificKeywords);

//7)Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"
const duplicateWords = movies.filter(element=>{
    const moviesTitleArray = element.title.toLowerCase().split(" ");
    const repeatingWords = moviesTitleArray.filter((word,wordIndex)=>{
        return moviesTitleArray.indexOf(word) !== wordIndex
    });
    return repeatingWords.length >0;
})
console.log(duplicateWords);

//8)Calculate the average rating of all the movies using reduce.
const sumRatingOfAllMovies = movies.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0);
const averageRatingOfAllMovies =(sumRatingOfAllMovies/movies.length).toFixed(2);
console.log("The average rating of all the movies is " + averageRatingOfAllMovies);

//9)Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123}
let obj={"Bad movies":0,
"Average movies":0,
"Good movies":0};

const GoodAverageBadMoviescount =movies.reduce((total,element) =>{
    if(element.tag === "Bad"){
        total ="Bad movies"; 
        return obj[total]++;
    }else if(element.tag === "Average"){
        total ="Average movies"; 
        return obj[total]++;
    }else if(element.tag === "Good"){
        total ="Good movies";
        return obj[total]++;
    }
}) 
console.log(obj);

