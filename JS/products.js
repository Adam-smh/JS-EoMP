let Url = "https://powerful-cove-00684.herokuapp.com/show-products/";
let productspg = document.querySelector(".productpg");

function getProducts(url) {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${window.localStorage["jwt-token"]}`,
    },
  })
    .then((results) => results.json())
    .then((data) => {
      console.log(data);
      products = data.products;
      productspg.innerHTML = "";
      products.forEach((product) => {
        productspg.innerHTML += `<div class="item" onclick="toggleModal()" id="${product[0]}">
                                    <img class="productimg" src="${product[3]}" alt="">
                                    <h3 class="productname">${product[2]}</h3>
                                    <p class="productprice">R${product[6]}</p>
                                    <div>`;
      });
    });
}

getProducts(Url);
