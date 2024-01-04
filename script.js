let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "1.png",
    price: 12000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    image: "2.png",
    price: 22000,
  },
  {
    id: 3,
    name: "PRODUCT NAME 3",
    image: "3.png",
    price: 32000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    image: "4.png",
    price: 42000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    image: "5.png",
    price: 52000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    image: "6.png",
    price: 62000,
  },
  {
    id: 7,
    name: "PRODUCT NAME 7",
    image: "6.png",
    price: 62000,
  },
  {
    id: 8,
    name: "PRODUCT NAME 8",
    image: "6.png",
    price: 62000,
  },
  {
    id: 9,
    name: "PRODUCT NAME 9",
    image: "6.png",
    price: 62000,
  },
  {
    id: 10,
    name: "PRODUCT NAME 10",
    image: "6.png",
    price: 62000,
  },
  {
    id: 11,
    name: "PRODUCT NAME 11",
    image: "6.png",
    price: 62000,
  },
  {
    id: 12,
    name: "PRODUCT NAME 12",
    image: "6.png",
    price: 62000,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}" />
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add to Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

let mybutton = document.querySelector("#myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
