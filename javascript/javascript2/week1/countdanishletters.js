//Find and count the Danish letters
function findDanishLetters(str) {
    const find = str.split("");
    const obj = {};
    let count = 0;
    for (let i = 0; i < find.length; i++) {
        if (find[i] === "ø" ||find[i] === "å"||find[i] === "æ"){
            const char = find[i];
            obj.total = ++count;
            if (obj[char]) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}
const danishString1 = "Jeg har en blå bil";
console.log(findDanishLetters(danishString1));
const danishString = "Blå grød med røde bær";
console.log(findDanishLetters(danishString));
