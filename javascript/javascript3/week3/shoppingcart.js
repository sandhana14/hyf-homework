class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    if (currency === "USD") {
      return this.price * 0.16289;
    } else if (currency === "INR") {
      return this.price * 12.08;
    } else if (currency === "EUR") {
      return this.price * 0.13;
    } else if (currency === "SEK") {
      return this.price * 2.7;
    } else {
      return "Please check the currency which is available(USD,INR,EUR,SEK)";
    }
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    if (this.products.length !== 0) {
      this.products.splice(this.products.indexOf(product), 1);
    }
  }

  searchProduct(productName) {
    return this.products.filter((data) => data.name === productName);
  }

  getTotal() {
    return this.products.map((data) => data.price).reduce((a, b) => a + b, 0);
  }

  getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        const pTag1 = document.createElement("p");
        pTag1.textContent = `Username is ${data.username}`;
        document.body.appendChild(pTag1);
      });
  }
  renderProducts() {
    const bodyElement = document.querySelector("body");
    const ulTag = document.createElement("ul");

    ulTag.innerHTML = " ";

    const h2Tag = document.createElement("h2");
    h2Tag.textContent = `Shopping cart`;
    bodyElement.appendChild(h2Tag);

    this.products.forEach((product) => {
      const liElement1 = document.createElement("li");
      liElement1.textContent = `Product ${product.name} and the price ${product.price}`;
      ulTag.appendChild(liElement1);
    });
    bodyElement.appendChild(ulTag);

    const pTag = document.createElement("p");
    pTag.textContent = `Total price of the products in shopping cart is ${this.getTotal()}`;
    bodyElement.appendChild(pTag);
  }
}

const shoppingCart = new ShoppingCart();

const Flatscreen = new Product("Flat-screen", 5000);
const Chair = new Product("Chair", 500);
const Hairgel = new Product("Hair-gel", 100);
const Table = new Product("Table", 1000);
const Sofa = new Product("Sofa", 560);
const Cycle = new Product("Cycle", 2000);

shoppingCart.addProduct(Flatscreen);
shoppingCart.addProduct(Chair);
shoppingCart.addProduct(Hairgel);
shoppingCart.addProduct(Table);
shoppingCart.addProduct(Sofa);
shoppingCart.addProduct(Cycle);

const total = shoppingCart.getTotal();
console.log(total);
const search = shoppingCart.searchProduct("Table");
console.log(search);

shoppingCart.getUser();
const plant = new Product("plant", 100);
console.log(plant.convertToCurrency("USD"));
console.log(shoppingCart);
shoppingCart.renderProducts();
