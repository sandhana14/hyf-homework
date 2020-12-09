//Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
const addition = ()=>console.log(2+2);
const subtraction = ()=>console.log(10-2);
const multiplication = ()=>console.log(2*4);

const arrayOfFunctions3 = [addition,subtraction,multiplication];
for(let i=0; i<arrayOfFunctions3.length; i++){
    arrayOfFunctions3[i]();
    }

//Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested:
const appleText = function(){
                    console.log("This is an apple")
}

function bananaText(){
    console.log("This is banana");
}

appleText();//created function as a const
bananaText();//created normal function

//Create an object that has a key whose value is a function. Try calling this function.
const obj = {orange : function(){console.log("This is an orange")}};
obj.orange();
