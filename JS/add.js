function fetchProducts(url) {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `jwt ${window.localStorage["jwt-token"]}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      products = data.products;
      let container = document.querySelector(".Container");
      container.innerHTML = "";
      products.forEach((product) => {
        container.innerHTML += `<div class="product" id="${product[0]}">
                                        <img src="${product[3]}" alt="">
                                        <h6 class="productName">${product[2]}</h6>
                                        <p class="price">R${product[6]}</p>
                                        <div class="buttonContainer">
                                        </div>
                                      </div>`;
      });
      let productElements = document.querySelectorAll(".product");
      productElements.forEach((product) => {
        product.addEventListener("click", (e) => {
          fetch(
            `https://powerful-cove-00684.herokuapp.com/view-product/${e.currentTarget.id}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              product = data.product;
              console.log(product[2]);
              document.querySelector(".modal").id = product[0];
              document.querySelector(".modal").innerHTML = `
                <button class="closeM" onclick="toggleModal()">X</button>
                <img class="mImg" src="${product[3]}" alt="Image preview...">
                <div class="modalstuff">
                  <div class="info">
                    <h3>Name</h3>
                    <input class="mProductName" type="text" placeholder="Name" value="${product[2]}"/>
                    <h3>Category</h3>
                    <input class="mProductCategory" type="text" placeholder="Category" value="${product[4]}"/>
                    <h3>Description</h3>
                    <input class="mProductDescription" type="message" placeholder="Description" value="${product[5]}"/>
                    
                    <h3>Price</h3>
                    <input class="mProductPrice" type="number" placeholder="Price" value="${product[6]}"/>
                    
                    <h3>Image</h3>
                    <input class="mProductImage" type="file" onchange="previewFile(document.querySelector('.modalImg'))" />
                    <button class="submitEdit" onclick="editProduct(document.querySelector('.modal'))">Save Changes</button>
                  </div>
                </div>
                `;
            });
        });
      });
    });
}

fetchProducts(
  `https://powerful-cove-00684.herokuapp.com/get-user-products/${window.localStorage["user-id"]}`
);

function toggleModal() {
  document.querySelector(".");
}

function edit(e) {
  let product_id = parseInt(e.id);
  let name = document.querySelector(".modalPro");
}
