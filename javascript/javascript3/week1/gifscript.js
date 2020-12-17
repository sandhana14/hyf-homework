const inputElementSearchForGif = document.getElementById("search_for_gif");
const buttonElement = document.getElementById("button_to_search");
const inputElementForNumberOfGif = document.getElementById("number_of_gifs");
const outputDivTag = document.getElementById("output");
let url;

function getGif(){
    fetch(url)
    .then(response=>response.json())
    .then(content =>{
        content.data.forEach(element=>{
            const lineBreak = document.createElement('br');
            const img = document.createElement("img");
            console.log(element.images.downsized_still.url);
            img.width = '200';
            img.height = '200';
            img.src = element.images.downsized_still.url;
            outputDivTag.appendChild(lineBreak);
            outputDivTag.appendChild(img);
        });
    })
    .catch(err=>{
        console.error(err);
    })
}

function getGifBasedOnSearchUnlimited(){
    outputDivTag.innerHTML = "";
    const searchWord = inputElementSearchForGif.value;
    url=`https://api.giphy.com/v1/gifs/search?api_key=k7xzItTFSIHGAuRWs81m3Pa36v87OptO&q=${searchWord}&limit=25`;
    getGif();
}

function getGifBasedOnNumber(){
    outputDivTag.innerHTML = "";
    const searchWord = inputElementSearchForGif.value;
    const number = inputElementForNumberOfGif.value;
    console.log("the search value is "+searchWord+" the number is " + number);
    url=`https://api.giphy.com/v1/gifs/search?api_key=k7xzItTFSIHGAuRWs81m3Pa36v87OptO&q=${searchWord}&limit=${number}`;
    getGif();
}

buttonElement.addEventListener("click",getGifBasedOnSearchUnlimited);
inputElementForNumberOfGif.addEventListener("input",getGifBasedOnNumber);