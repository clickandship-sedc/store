const cartContainer = document.querySelector(".cart")
const confirmationBox = document.querySelector(".purchaseConfirmation")

// Confirmation cart elements
const confirmationPrice = document.querySelector("#confirmationPrice") 
const goBackBtn = document.querySelector("#goBack")
const confirmCartBtn = document.querySelector("#confirmCart")

// Summary buttons
const toCheckoutBtn = document.querySelector(".proceedToCheckout")
const backToCartBtn = document.querySelector(".backToCart")
const purchaseBtn = document.querySelector(".makePurchase")

// Checkout buttons 
const toPaymentBtn = document.querySelector(".toPayment")
const toReviewBtn = document.querySelector(".toReview")

// Stage Buttons
const stageOneBtn = document.querySelector(".stageOne")
const stageTwoBtn = document.querySelector(".stageTwo")
const stageThreeBtn = document.querySelector(".stageThree")

// Cart Children
const productsList = document.querySelector(".productsUl")
const summaryList = document.querySelector(".summaryUl")

////// Uncoment to clear cart in local storage
// localStorage.setItem("cart", JSON.stringify([])) 

///////////////////// FREE SHIPPING AND 0 DISCOUNT
// localStorage.setItem("cart", JSON.stringify([{
//     "title": "Waterproof Car Cover",
//     "price": 89.99,
//     "shipping": 0,
//     "stock": 13,
//     "id": "aefa415c-832dc-4e6e-a7db-ac4c15125a742",
//     "sale": 0,
//     "amount": 2,
//     "totalPrice": 0,
//     "category": {
//         "categoryid": "jewellery",
//         "categorytitle": "Jewellery",
//         "subcategoryid": "bc5e1387-12a2-47d2-9a2e-ed34fb75545a",
//         "subcategorytitle": "Body Jewelry"
//     },
// }, {
//     "title": "Waterproof Car Cover",
//     "price": 75.99,
//     "shipping": 0,
//     "stock": 5,
//     "id": "aefa495c-82dc-4e46e-3a7db-ac4c1525a742",
//     "sale": 0,
//     "amount": 2,
//     "totalPrice": 0,
//     "category": {
//         "categoryid": "jewellery",
//         "categorytitle": "Jewellery",
//         "subcategoryid": "bc5e1387-12a2-47d2-9a2e-ed34fb75545a",
//         "subcategorytitle": "Body Jewelry"
//     }
// }]))

const cartButton = document.querySelector('#cartButton')

cartButton.addEventListener('click', (e) => {
  e.preventDefault()
  if (cartContainer.classList.contains("currentMain")) return
  switchMain(cartContainer, "flex")
  openCart()
})

function openCart() {
    emptyCart() // Check if cart is empty
    fillCart(productsList) // Fill Cart with products
    fillSummary(summaryList) // Fill Summary with prices
}

function emptyCart() {
  const cartItems = JSON.parse(localStorage.getItem("cart") || "[]")
  if (cartItems.length === 0) {
    cartContainer.classList.add("cartEmpty")
    return
  }

  if (cartContainer.classList.contains("cartEmpty")) {
    cartContainer.classList.remove("cartEmpty")
  }
}


async function fillCart(ul) {
  const cartItems = JSON.parse(localStorage.getItem("cart") || "[]")

  const subCategoriesArray = await fetchJSON('./mock/sub-categories.json')
  const flattenedSubCategories = flattenObjectArrays(subCategoriesArray)

  ul.innerHTML = ''
  for (let i = 0; i < cartItems.length; i++) {
    const product = cartItems[i]
    calculateTotalPrice(product) // Calculate total price on each product

    // Li
    const li = document.createElement("li")

    // Title
    const title = document.createElement("h3")
    title.classList.add("pTitle")
    const p = document.createElement("p")
    p.setAttribute("tabindex", 0)
    p.textContent = product.title
    p.addEventListener("click", (e) => {
      // console.log(product.id)
      showElement(productTimeouts, productStates.openTime, productStates.showProduct, productStates.enableProduct)
      fillProduct(currentProdCard, product)
    })
    p.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        // console.log(product.id)
      }
    })
    title.appendChild(p)

    // console.log(cartItems)
    // Image
    for (let j = 0; j < flattenedSubCategories.length; j++) {
      if (flattenedSubCategories[j].id === cartItems[i].category.subcategoryid) {
        title.style.setProperty('--bgimg', `url(${flattenedSubCategories[j].image})`)
      }
    }

    // Info div
    const infoDiv = document.createElement("div")

    // Minus Button
    const minusButton = document.createElement("button")
    minusButton.innerHTML = `<span class="material-symbols-outlined">arrow_downward</span>`
    minusButton.classList.add("amountBtn")
    minusButton.id = `minusBtn-${product.id}`
    minusButton.addEventListener("click", () => {
      if (product.amount > 1) {
        product.amount--
        calculateTotalPrice(product)
        updateCart(cartItems)
        updateDisplay(li, product, product.id)
        fillSummary(summaryList)
      }
    })
    infoDiv.appendChild(minusButton)

    // Amount Number
    const amountNumber = document.createElement("h2")
    amountNumber.classList.add("amount")
    amountNumber.textContent = product.amount
    infoDiv.appendChild(amountNumber)

    // Plus Button
    const plusButton = document.createElement("button");
    plusButton.innerHTML = `<span class="material-symbols-outlined">arrow_upward</span>`;
    plusButton.classList.add("amountBtn");
    plusButton.id = `plusBtn-${product.id}`;
    plusButton.addEventListener("click", () => {
      if (product.amount < product.stock) {
        product.amount++;
        calculateTotalPrice(product);
        updateCart(cartItems);
        updateDisplay(li, product, product.id);
        fillSummary(summaryList);
      }
    });
    infoDiv.appendChild(plusButton);

    // DIVIDER
    const divider = document.createElement("div");
    divider.classList.add("divider");
    infoDiv.appendChild(divider);

    // Remove button
    const removeButton = document.createElement("button");
    removeButton.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
    removeButton.classList.add("remove");
    removeButton.id = `removeBtn-${product.id}`;
    removeButton.addEventListener("click", () => {
      const index = cartItems.findIndex(item => item.id === product.id);
      if (index !== -1) {
        cartItems.splice(index, 1);
        updateCart(cartItems);
        ul.removeChild(li);
        fillSummary(summaryList);
        emptyCart(cartItems);
      }
    });
    infoDiv.appendChild(removeButton);

    // Price
    const price = document.createElement("h2");
    price.id = `price-${product.id}`;
    price.classList.add("amount");
    price.textContent = `$${product.totalPrice.toFixed(2)}`;
    infoDiv.appendChild(price);

    // Append elements to li
    li.appendChild(title);
    li.appendChild(infoDiv);

    // Append li to ul
    ul.appendChild(li);
  }
}


function fillSummary(ul) {
    ul.innerHTML = ''
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]")
    let pricesArray = calculateSummary(cartItems)
    // for (let i = 0; i < pricesArray.length; i++) {
    //     if (pricesArray[i] === "0.00") {
    //         pricesArray[i] = "0"
    //     } else if (pricesArray[i].endsWith(".00")) {
    //         const currentValue = parseFloat(pricesArray[i])
    //         pricesArray[i] = (currentValue - 0.01).toFixed(2)
    //     }
    // }

    // Cost 
    const costLi = document.createElement("li")
    const priceh3 = document.createElement("h3")
    priceh3.innerText = 'Cart Cost'
    const priceh2 = document.createElement("h2")
    priceh2.classList.add("amount")

    priceh2.innerText = `${pricesArray[1]}$`
    costLi.appendChild(priceh3)
    costLi.appendChild(priceh2)

    // Shipping
    const shippingLi = document.createElement("li")
    const shippingh3 = document.createElement("h3")
    shippingh3.innerText = 'Shipping'
    const shippingh2 = document.createElement("h2")
    shippingh2.classList.add("amount")

    if (parseFloat(pricesArray[2]) !== 0) {
        shippingh2.innerText = `$${pricesArray[2]}`
    } else {
        shippingh2.innerText = `FREE`
    }

    shippingLi.appendChild(shippingh3)
    shippingLi.appendChild(shippingh2)

    // Total
    const totalLi = document.createElement("li")
    const totalh2 = document.createElement("h2")
    totalh2.innerHTML = 'Total'
    totalh2.classList.add("total")
    const totalh22 = document.createElement("h2")
    totalh22.classList.add("totalAmount")
    totalh22.innerText = `$${pricesArray[0]}`
    totalLi.appendChild(totalh2)

    if (parseFloat(pricesArray[3]) !== 0) {
        const totalh4 = document.createElement("h4")
        totalh4.innerText = `-$${pricesArray[3]}`
        totalLi.appendChild(totalh4)
    }
    totalLi.appendChild(totalh22)

    ul.appendChild(costLi)
    ul.appendChild(shippingLi)
    ul.appendChild(totalLi)

    confirmationPrice.innerText = `$${pricesArray[0]}`
}

// function calculateSummary(cartItems) {
//     let currentPrice = 0;
//     let currentShipping = 0;
//     let currentDiscount = 0;
//     let currentTotal = 0;
  
//     for (let i = 0; i < cartItems.length; i++) {
//       const product = cartItems[i];
//       currentPrice += product.price * product.amount;
//       currentShipping += product.shipping;
//       currentDiscount += (product.price * product.amount) * (product.sale / 100); // Calculate total discount as a percentage of the original price
//     }
//     console.log(currentPrice, 'curPrice')
//     console.log(currentDiscount, 'curDiscount')
//     const discountedPrice = currentPrice - currentDiscount; // Calculate discounted price
//     currentPrice = currentPrice.toFixed(2);
//     currentShipping = currentShipping.toFixed(2);
//     console.log(currentShipping, 'ONE')
//     currentDiscount = currentDiscount.toFixed(2);
//     console.log(discountedPrice, 'DISCOUNT')
//     currentTotal = (parseFloat(discountedPrice) + parseFloat(currentShipping)).toFixed(2);
//     console.log(currentTotal, 'TWO')
    
//     if (currentTotal < 0) {
//       currentTotal = Math.abs(currentTotal).toString();
//     }
  
//     return [currentTotal, currentPrice, currentShipping, currentDiscount, discountedPrice.toFixed(2)];
//   }

function calculateSummary(cartItems) {
    let currentPrice = 0;
    let currentShipping = 0;
    let currentDiscount = 0;
    let currentTotal = 0;
  
    for (let i = 0; i < cartItems.length; i++) {
      const product = cartItems[i];
      currentPrice += product.price * product.amount;
      currentShipping += product.shipping;
      currentDiscount += (product.price * product.amount) * (product.sale / 100); // Calculate total discount as a percentage of the original price
    }
    
    // console.log(currentPrice, 'curPrice')
    // console.log(currentDiscount, 'curDiscount')
    // console.log(currentShipping, 'ONE')
    let discountedPrice
    if(currentDiscount === 0){
      discountedPrice = currentPrice
    } else{
      discountedPrice = currentPrice - currentDiscount; // Calculate discounted price
    }
    
    currentPrice = currentPrice.toFixed(2);
    currentShipping = currentShipping.toFixed(2);
    
    currentTotal = (parseFloat(discountedPrice) + parseFloat(currentShipping)).toFixed(2);
    // console.log(discountedPrice, 'DISCOUNT')
    // console.log(currentTotal, 'TWO')
    if (currentTotal < 0) {
      currentTotal = Math.abs(currentTotal).toString();
    }
  
    currentDiscount = currentDiscount.toFixed(2);
  
    return [currentTotal, currentPrice, currentShipping, currentDiscount, discountedPrice.toFixed(2)];
  }
  

function calculateTotalPrice(product) {
    // const discountedPrice = product.price - (product.price * product.sale / 100)
    product.totalPrice = (product.price * product.amount)
}

function updateDisplay(li, product, productId) {
    li.querySelector(".amount").textContent = product.amount // sets amount on screen
    const plusBtnTemp = document.querySelector(`#plusBtn-${productId}`)
    const minusBtnTemp = document.querySelector(`#minusBtn-${productId}`)

    if (product.amount >= product.stock) {
        plusBtnTemp.classList.add("disabledAmountBtn")
        plusBtnTemp.disabled = true
        minusBtnTemp.classList.remove("disabledAmountBtn")
    } else {
        plusBtnTemp.classList.remove("disabledAmountBtn")
        plusBtnTemp.disabled = false
    }

    if (product.amount <= 1) {
        plusBtnTemp.classList.remove("disabledAmountBtn")
        minusBtnTemp.disabled = true
        minusBtnTemp.classList.add("disabledAmountBtn")
    } else {
        minusBtnTemp.disabled = false
        minusBtnTemp.classList.remove("disabledAmountBtn")
    }
    if (product.stock === 1) {
        plusBtnTemp.classList.add("disabledAmountBtn");
        plusBtnTemp.disabled = true;
        minusBtnTemp.classList.add("disabledAmountBtn");
        minusBtnTemp.disabled = true;
    }

    li.querySelector(`#price-${productId}`).textContent = `$${product.totalPrice.toFixed(2)}`
}

function updateCart(cartItems) {
    localStorage.setItem("cart", JSON.stringify(cartItems)) // Updates local storage cart // TODO Should update db cart if use has acc
}

goBackBtn.addEventListener("click", () => {
    confirmationBox.close()
})

confirmCartBtn.addEventListener("click", () => {
    localStorage.setItem("cart", JSON.stringify([]))
    switchMain(document.querySelector('.homePage'), "block")
    confirmationBox.close() 
})