console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
    const ul_tag = document.querySelector("ul");

    for (let i = 0; i < products.length; i++) {
        const new_li_element = document.createElement("li");
        const new_h1_element = document.createElement("h1");
        new_h1_element.innerHTML = products[i].name;
        new_li_element.appendChild(new_h1_element);

        const new_price_element = document.createElement("p");
        new_price_element.innerHTML = "Price: " + products[i].price;
        new_li_element.appendChild(new_price_element);

        const new_rating_element = document.createElement("p");
        new_rating_element.innerHTML = "Rating: " + products[i].rating;
        new_li_element.appendChild(new_rating_element);

        ul_tag.appendChild(new_li_element);
    }
}

renderProducts(products);

