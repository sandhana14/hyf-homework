const url = "https://api.github.com/search/repositories?q=user:";
const classmateOneRepo = fetch(url + "rajanibusani");
const classmateTwoRepo = fetch(url + "sandhana14");
const classmateThreeRepo = fetch(url + "JyothiNandyala");

Promise.all([classmateOneRepo, classmateTwoRepo, classmateThreeRepo])
  .then((data) => Promise.all(data.map((response) => response.json())))
  .then((data) => {
    const ulTag = document.getElementsByTagName("ul");
    data.forEach((element) => {
      element.items.forEach((result) => {
        const h2Element = document.createElement("h2");
        h2Element.textContent = `${result.owner.login}'s repositories`;
        ulTag[0].appendChild(h2Element);

        const li1 = document.createElement("li");
        li1.textContent = `Full name is ${result.full_name}`;
        ulTag[0].appendChild(li1);

        const li2 = document.createElement("li");
        li2.textContent = `The url is ${result.url}`;
        ulTag[0].appendChild(li2);

        const li3 = document.createElement("li");
        li3.textContent = `The owner of the repo is ${result.owner.login}`;
        ulTag[0].appendChild(li3);
      });
    });
  });
