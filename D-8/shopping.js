let products = [
  {
    id: 1,
    name: "White Floral Print Mini Dress",
    size: "M",
    color: "white",
    price: 900,
    image: "p1.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Puff-sleeved midi dress",
    size: "L",
    color: "PeachPuff",
    price: 950,
    image: "p2.jpg",
    description: "Good looking midi",
  },

  {
    id: 3,
    name: "Circular Crossbody Purse",
    size: "-",
    color: "Light Pink",
    price: 700,
    image: "p3.jpg",
    description: "Stylish circular purse",
  },

  {
    id: 4,
    name: "Purse for Party",
    size: "-",
    color: "Pink",
    price: 800,
    image: "p4.jpg",
    description: "Beautifull Party Purse",
  },

  {
    id: 5,
    name: "Marilyn Lace Up Oxford Shoes",
    size: "-",
    color: "Brown",
    price: 1300,
    image: "p5.jpg",
    description: "Trendy Lace shoes",
  },

  {
    id: 6,
    name: "MS900 knit Running Shoes",
    size: "-",
    color: "Henna",
    price: 1500,
    image: "p6.jpg",
    description: "Good looking Running Shoes",
  },
  {
    id: 7,
    name: "Simple Plain Suit",
    size: "M",
    color: "Navy Blue",
    price: 1200,
    image: "p7.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 8,
    name: "Black Shirt",
    size: "L",
    color: "White",
    price: 1100,
    image: "p8.jpg",
    description: "Good looking S pattern letter print t-shirt",
  },

  {
    id: 9,
    name: "Thankful pattern print",
    size: "M",
    color: "Maroon",
    price: 900,
    image: "p9.jpg",
    description: "Good looking T-shirt",
  },

  {
    id: 10,
    name: "Sunglasses",
    size: " -",
    color: "Blue",
    price: 1000,
    image: "p10.jfif",
    description: "Superb Glasses",
  },

  {
    id: 11,
    name: "Rado watches for women",
    size: "-",
    color: "Blue",
    price: 3000,
    image: "p11.jpg",
    description: "Smart looking watch",
  },

  {
    id: 12,
    name: "Rolex Men's watch",
    size: "-",
    color: "",
    price: 3500,
    image: "p12.jpg",
    description: "Smart watch for men",
  },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="product/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="product/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}
let countval=0;
function addToCart(id) {
  // getting the product
  
  
  let pro = getProductByID(products, id);
	if(cart.includes(pro))
	{
		alert("you already have this product.");
	}
	else{
  //   putting in cart
			cart.push(pro);
			countval+=1;
			document.getElementById("count").innerText=countval;
			//document.write(c);
	// console.log(c);
			displayProducts(cart, "cart");
  }
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  countval-=1;
  document.getElementById("count").innerText=countval;
  displayProducts(cart, "cart");
}

function filter()
{
	//console.log("hiii");
	let min=document.getElementById("min_value").value;
	let max=document.getElementById("max_value").value;
	//console.log(min +" " + max);
	let priceBasedProduct=products.filter(function(product)
	{
		return (product.price>=min && product.price<=max);
		
	});
	displayProducts(priceBasedProduct);
}

