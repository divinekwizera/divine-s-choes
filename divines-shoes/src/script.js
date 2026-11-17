
const products = [
  {
    name: "White Sneakers",
    price: 25000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
  },
  {
    name: "Black Sneakers",
    price: 30000,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600"
  },
  {
    name: "Sport Shoes",
    price: 22000,
    image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=600"
  }
];

const productList = document.getElementById("product-list");

if (productList) {
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price.toLocaleString()} RWF</p>
      <button class="btn">ORDER NOW</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      const message = `Ndashaka ${product.name}, igiciro ni ${product.price} RWF`;
      window.open(
        "https://wa.me/250782184059?text=" +
        encodeURIComponent(message),
        "_blank"
      );
    });

    productList.appendChild(card);
  });
} else {
  console.error("Product list ntibonetse muri index.html");
}
