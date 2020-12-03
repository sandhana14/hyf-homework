//Find the shortest word
const danishWords = ["ø","bil", "plante", "kaffe", "bog","planetarium"];

function findShortestWord(arrOfWords) {
    let shortest="";
    for (let i = 0; i < arrOfWords.length; i++) {
        if (shortest == "" || arrOfWords[i].length < shortest.length) {
            shortest = arrOfWords[i];
        }
    }
    return shortest;
}

console.log(findShortestWord(danishWords));
