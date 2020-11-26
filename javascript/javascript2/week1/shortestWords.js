//Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function findShortestWord(arrOfWords) {
    let shortest="";
    for (let i = 1; i < arrOfWords.length; i++) {
        if (shortest == "" || arrOfWords[i].length < shortest.length) {
            shortest = arrOfWords[i];
        }
    }
    return shortest;
}

console.log(findShortestWord(danishWords));
