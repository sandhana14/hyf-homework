fetch("https://cat-fact.herokuapp.com/facts")
    .then(response => response.json())
    .then(food => {
        console.log(food);
    });