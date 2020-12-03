const products = getAvailableProducts();

function renderProducts(products) {
    const ul_tag = document.querySelector("ul");
    ul_tag.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        const new_li_element = document.createElement("li");
        const new_h2_element = document.createElement("h2");
        new_h2_element.innerHTML = products[i].name;
        new_li_element.appendChild(new_h2_element);

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

//Search by product name
const input_product_field = document.getElementById("search-product-field");
input_product_field.addEventListener("input", function (e) {
    const productUserValue = e.target.value.toLowerCase();
    const filteredProducts = products.filter((element) =>
        element.name.toLowerCase().includes(productUserValue)
    );
    renderProducts(filteredProducts);
});

//Search by price and setting the maximum price
const input_price_field = document.getElementById("search-price-field");
input_price_field.addEventListener("input", function (e) {
    const maximumPriceUserValue = parseInt(e.target.value);
    const filteredPrice = products.filter(
        (element) => element.price < maximumPriceUserValue
    );
    if (e.target.value === "") {
        filteredPrice = products;
    }
    renderProducts(filteredPrice);
});

//Search by ratings
const input_rating_field = document.getElementById("search-ratings-field");
input_rating_field.addEventListener("input", function (e) {
    let ratingsUserValue = parseInt(e.target.value);
    let filteredRatings = products.filter(
        (element) => element.rating > ratingsUserValue
    );
    if (e.target.value === "") {
        filteredRatings = products;
    }
    renderProducts(filteredRatings);
});

//sort by price
const sort_by_price = document.getElementById("sortByPrice");

//sort from high to low price
sort_by_price.addEventListener("change", highToLowSorting);
function highToLowSorting() {
    const value = sort_by_price.options[sort_by_price.selectedIndex].value;
    if (value === "high") {
        const highprice = products.sort((a, b) => b.price - a.price);
        renderProducts(highprice);
    }
}

//sort from low to high price
sort_by_price.addEventListener("change", lowToHighSorting);
function lowToHighSorting() {
    const value = sort_by_price.options[sort_by_price.selectedIndex].value;
    if (value === "low") {
        const lowprice = products.sort((a, b) => a.price - b.price);
        renderProducts(lowprice);
    }
}
