const products = [
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    brand: "Logitech",
  },
  {
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    name: "LED Monitor",
    price: 129.99,
    category: "Electronics",
    brand: "Dell",
  },
  {
    name: "Bluetooth Speaker",
    price: 45.99,
    category: "Electronics",
    brand: "JBL",
  },
  { name: "Laptop", price: 999.99, category: "Electronics", brand: "Apple" },
  { name: "Running Shoes", price: 59.99, category: "Footwear", brand: "Nike" },
  { name: "Sneakers", price: 75.99, category: "Footwear", brand: "Adidas" },
  { name: "Sandals", price: 25.99, category: "Footwear", brand: "Teva" },
  { name: "Formal Shoes", price: 120.0, category: "Footwear", brand: "Clarks" },
  { name: "Boots", price: 150.0, category: "Footwear", brand: "Timberland" },
  {
    name: "Blender",
    price: 34.99,
    category: "Home Appliances",
    brand: "Oster",
  },
  {
    name: "Microwave Oven",
    price: 99.99,
    category: "Home Appliances",
    brand: "Panasonic",
  },
  {
    name: "Air Conditioner",
    price: 299.99,
    category: "Home Appliances",
    brand: "LG",
  },
  {
    name: "Vacuum Cleaner",
    price: 149.99,
    category: "Home Appliances",
    brand: "Dyson",
  },
  {
    name: "Toaster",
    price: 29.99,
    category: "Home Appliances",
    brand: "Breville",
  },
  { name: "Notebook", price: 3.99, category: "Stationery", brand: "Moleskine" },
  { name: "Pen Set", price: 12.99, category: "Stationery", brand: "Parker" },
  {
    name: "Highlighters",
    price: 5.99,
    category: "Stationery",
    brand: "Sharpie",
  },
  { name: "Stapler", price: 7.99, category: "Stationery", brand: "Swingline" },
  {
    name: "Planner",
    price: 14.99,
    category: "Stationery",
    brand: "Erin Condren",
  },
  { name: "Desk Chair", price: 89.99, category: "Furniture", brand: "Ikea" },
  {
    name: "Coffee Table",
    price: 129.99,
    category: "Furniture",
    brand: "West Elm",
  },
  {
    name: "Sofa",
    price: 499.99,
    category: "Furniture",
    brand: "Ashley Furniture",
  },
  { name: "Bookshelf", price: 79.99, category: "Furniture", brand: "Sauder" },
  {
    name: "Dining Table",
    price: 399.99,
    category: "Furniture",
    brand: "Pottery Barn",
  },
  { name: "Yoga Mat", price: 19.99, category: "Fitness", brand: "Gaiam" },
  { name: "Dumbbells", price: 49.99, category: "Fitness", brand: "Bowflex" },
  {
    name: "Treadmill",
    price: 699.99,
    category: "Fitness",
    brand: "NordicTrack",
  },
  {
    name: "Resistance Bands",
    price: 14.99,
    category: "Fitness",
    brand: "Fit Simplify",
  },
  {
    name: "Exercise Bike",
    price: 299.99,
    category: "Fitness",
    brand: "Peloton",
  },
  {
    name: "Coffee Maker",
    price: 49.99,
    category: "Kitchen Appliances",
    brand: "Keurig",
  },
  {
    name: "Air Fryer",
    price: 89.99,
    category: "Kitchen Appliances",
    brand: "Ninja",
  },
  {
    name: "Stand Mixer",
    price: 199.99,
    category: "Kitchen Appliances",
    brand: "KitchenAid",
  },
  {
    name: "Refrigerator",
    price: 799.99,
    category: "Kitchen Appliances",
    brand: "Whirlpool",
  },
  {
    name: "Dishwasher",
    price: 399.99,
    category: "Kitchen Appliances",
    brand: "Bosch",
  },
];
const parent = document.getElementById("main");

function renderProducts(productsToRender) {
  parent.innerHTML = "";
  productsToRender.forEach((item, index) => {
    parent.innerHTML += `
            <div class="product" onclick="removeProduct(${index})">
                <h2>${item.name}</h2>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Category: ${item.category}</p>
                <p>Brand: ${item.brand}</p>
            </div>
        `;
  });
}

// item remove function throuh splice //

function removeProduct(index) {
  products.splice(index, 1);
  renderProducts(products);
}

function btn(element) {
  let category = element.innerHTML;
  let filteredProducts;

  if (category === "All") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter((item) => item.category === category);
  }

  renderProducts(filteredProducts);
}

// Initial render
renderProducts(products);
