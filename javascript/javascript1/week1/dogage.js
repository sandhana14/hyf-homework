//A dog age calculator.
let dogYearOfBirth = 2020;
let dogYearFuture = 2030;
let dogYear = 7;
let dogAge;
let shouldShowResultInDogYears = false; 
let humanOrDogYearsString = "dog";

dogAge = dogYearFuture-dogYearOfBirth;

if (shouldShowResultInDogYears){ 
    dogAge *= dogYear;
}
else
{
    humanOrDogYearsString = "human"; 
}

console.log("Your dog will be " + dogAge + " " + humanOrDogYearsString  + " Years old in " + dogYearFuture + "." );

