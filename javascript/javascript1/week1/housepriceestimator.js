//House price estimator.
let housePrice;
let VolumeInMeters;
//House price estimation for Julia. 
let gardenSizeInM2 = 70;
let width = 5;
let height = 8;
let depth = 11;
let actualHousePrice = 1000000;

VolumeInMeters = width*height*depth;
housePrice = VolumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (actualHousePrice>housePrice){
    console.log("Julia is paying too much.");
}
else{
    console.log("Julia is paying too little.");
}
//House price estimation for Peter. 
gardenSizeInM2 = 100;
width = 8;
height = 10;
depth = 10;
actualHousePrice = 2500000;

VolumeInMeters = width*height*depth;
housePrice = VolumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (actualHousePrice>housePrice){
    console.log("Peter is paying too much.");
}
else{
    console.log("Peter is paying too little.");
}


