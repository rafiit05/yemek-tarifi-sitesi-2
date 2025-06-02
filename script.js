
const list = document.getElementById("product-list");
const search = document.getElementById("search");

let products = [];

fetch("tarifler.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    displayProducts(products);
  });

function displayProducts(items) {
  list.innerHTML = "";
  items.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="tarif.html?id=${p.id}">
        <img src="${p.image}" alt="${p.name}">
        <strong>${p.name}</strong>
      </a>
    `;
    list.appendChild(li);
  });
}

search.addEventListener("input", () => {
  const term = search.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term));
  displayProducts(filtered);
});
