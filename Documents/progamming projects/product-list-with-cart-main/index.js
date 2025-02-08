


const userData = JSON.parse(`[
    {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]
`)



// import userData from "./data.json";
// console.log(userData);









// const imageData = () => {
//     const section = document.getElementById("section1");
//    const article = document.createElement("article");
//    // console.log(section);
//    const aside = document.getElementById("aside");
//    let quantity = "add to cart";
//    const amountofFood = document.createElement("p");

//    const priceofEach = document.createElement("p");

//    const countEach = document.createElement("p");
// let countSelected = 0;
//    userData.forEach((element) => {
//        //console.log(element.category);
//        //  console.log(element.image.desktop);
//        const button = document.createElement("button");
//        const span = document.createElement("span");

//        const category = document.createElement("p");
//          const name = document.createElement("h4");
//          const price = document.createElement("p");

//         // main food images
//         const img = document.createElement("img");
//         img.src = element.image.desktop;

//         // decrement button
//         const decrement = document.createElement("button");
//         const decreimg = document.createElement("img");
//         decreimg.src = "./assets/images/icon-decrement-quantity.svg";
//         decrement.appendChild(decreimg);
//         button.appendChild(decrement);


//         // cart image
//         const imgcart = document.createElement("img");
//         imgcart.src = "./assets/images/icon-add-to-cart.svg";
//         button.appendChild(imgcart);


//         // add to cart text
//         span.textContent = quantity;
//         button.appendChild(span);





//         //increment button
//         const increment = document.createElement("button");
//         const increimg = document.createElement("img");
//         increimg.src = "./assets/images/icon-increment-quantity.svg";
//         increment.appendChild(increimg);
//         button.appendChild(increment);


//             // main button

//             // category, name and price

//             category.textContent = `${element.category}`;
//             name.textContent= `${element.name}`;
//             price.textContent = ` $ ${element.price}`;


//             section.appendChild(img);

//             section.appendChild(button);

//             section.appendChild(category);
//             section.appendChild(name);
//             section.appendChild(price);


//             decrement.style.display = "none";
//             increment.style.display = "none";




// //button
//         button.addEventListener("click", () => {
//                 decrement.style.display = "inline";
//                 increment.style.display = "inline";
//             });


//             let counter = 0;



//         increment.addEventListener('click', () => {
//                button.style.backgroundColor = "brown";
//                counter++;
//                span.textContent = `${counter}`; 
//                img.style.border = "0.2rem solid brown";

//             //    push elements
//              selectedItems.push(element);
//             // console.log(selectedItems.length);

//             amountofFood.textContent = `Your Cart (${selectedItems.length})`;

//         //    const nameofFood = document.createElement("p");
//         //     nameofFood.textContent = '';
//         //   selectedItems.forEach((item) => {
//         //       // console.log(item.name);
//         //       nameofFood.textContent = `${item.name}`;

//         //       aside.appendChild(nameofFood);

//         });



//  });

//             decrement.addEventListener('click', () => {
//             img.style.border = "0.2rem solid brown";

//             if (counter >= 1) {
//                 counter--;
//                 span.textContent = `${counter}`;

//             selectedItems.pop(element);
//             amountofFood.textContent = `Your Cart (${selectedItems.length})`;



//         }

//          else {
//             span.textContent = 'add to cart';
//             img.style.border = "none";
//             button.style.backgroundColor = "white";
//             nameofFood.textContent = '';
//         }

//        });

//        aside.appendChild(amountofFood);

//     //    aside.appendChild(countEach);


//     }


//        imageData();


let selectedItems = [];

function updateSelectedItemsList() {
    const selectedAmount = document.getElementById("your-Cart");
    const selectedItemsList = document.getElementById("selected-items-list");
    const totalPriceElement = document.getElementById("total-prices");
    const carbonFreeSection = document.getElementById("carbon-free");
    const confirmOrderSection = document.getElementById("confirm-order");

    // Clear the list
    selectedItemsList.innerHTML = "";

    let totalQuantity = 0;
    let totalPrice = 0;

    // Add each selected item to the list
    selectedItems.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add();

        // Item name
        const itemName = document.createElement("span");
        itemName.textContent = item.name;


        //remove item
        const removeItem = document.createElement("button");
        const removeimg = document.createElement("img");
        removeimg.src = "./assets/images/icon-remove-item.svg";
        removeItem.appendChild(removeimg);
        removeItem.classList.add("remove", "rounded-circle", "round-0", "ms-auto");

        removeItem.addEventListener("click", function () {
           selectedItems = selectedItems.filter((i) => i.name !== item.name);
            updateSelectedItemsList();
        })

        // Item quantity and price
        const itemDetails = document.createElement("span");
        itemDetails.classList.add("d-flex");
        const itemquantity = document.createElement("span");
       itemquantity.classList.add("itemquantity", "p-2");
        itemquantity.textContent = `X${item.quantity}`;
        const itemPrice = document.createElement("span");
        itemPrice.classList.add("itemprice", "p-2");
        itemPrice.textContent = `@$${item.price}`;
        const itemValues = document.createElement("span");
        itemValues.classList.add("itemValues", "p-2");
        itemValues.textContent = `$${item.price * item.quantity}`;
    

//    append elemnts into itemdeatils
        itemDetails.appendChild(itemquantity);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(itemValues);  


        // Append itemname to the list item
        li.appendChild(itemName);
       

        // Append the list item to the selected items list
        selectedItemsList.appendChild(li);
        selectedItemsList.appendChild(removeItem);
        selectedItemsList.appendChild(itemDetails);
       
        
        selectedItemsList.classList.add("d-flex", "flex-column");

        // Update total quantity and price
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    // Update the cart amount
    selectedAmount.textContent = `Your Cart (${totalQuantity})`;

    // Update the total price
    totalPriceElement.textContent = `$${totalPrice}`;
totalPriceElement.classList.add();
    // Render Carbon-Free Section
    carbonFreeSection.innerHTML = ""; // Clear previous content

    if (selectedItems.length > 0) {
        const carbonImg = document.createElement("img");
        carbonImg.src = "./assets/images/icon-carbon-neutral.svg";
        carbonImg.alt = "Carbon Free";
        carbonImg.classList.add("me-2"); // Add margin to the right of the image

        const carbonText = document.createElement("p");
        carbonText.textContent = "This order is carbon free!";
        carbonText.classList.add("text-muted");

        carbonFreeSection.classList.add("d-flex", "align-items-center", "mt-3");
        carbonFreeSection.appendChild(carbonImg);
        carbonFreeSection.appendChild(carbonText);
    } else {
        // Display empty cart illustration and message
        const emptyCartImg = document.createElement("img");
        emptyCartImg.src = "./assets/images/illustration-empty-cart.svg";
        emptyCartImg.alt = "Empty Cart";
        emptyCartImg.classList.add("img-fluid", "mb-3"); // Responsive image with margin

        const emptyCartText = document.createElement("p");
        emptyCartText.textContent = "Your added items will appear here.";
        emptyCartText.classList.add("text-muted", "text-center");

        carbonFreeSection.classList.add("mt-3");
        carbonFreeSection.appendChild(emptyCartImg);
        carbonFreeSection.appendChild(emptyCartText);
    }

    // Render Confirm Order Button
    confirmOrderSection.innerHTML = ""; // Clear previous content
    if (selectedItems.length > 0) {
        const confirmButton = document.createElement("button");
        confirmButton.textContent = "Confirm Order";
        confirmButton.classList.add("btn", "btn-success", "mt-3");
        confirmOrderSection.appendChild(confirmButton);
        confirmButton.addEventListener("click", function () {
            confirmButton.setAttribute("data-bs-toggle", "modal");
            confirmButton.setAttribute("data-bs-target", "#staticBackdrop");

            let listofselected = document.getElementById("modal-list");
            listofselected.innerHTML = "";
            selectedItems.forEach((item) => {
                const modalimg = document.createElement("img")
                modalimg.classList.add("w-10", "h-5");
                const listedone = document.createElement("li");
                const quantity = document.createElement("p");
                const price = document.createElement("p");
                const elementsPrice = document.createElement("p");


                modalimg.src = item.image.desktop;
                listedone.textContent = `${(item.name)}`;

                quantity.textContent = `X${item.quantity}`;
                price.textContent = `@${item.price}`;
                let eachElementwithQuantityPrice = item.price * item.quantity;
                elementsPrice.textContent = `$${eachElementwithQuantityPrice}`;
                listofselected.appendChild(modalimg);
                listofselected.appendChild(listedone);
                listofselected.appendChild(quantity);
                listofselected.appendChild(price);
                listofselected.appendChild(elementsPrice);



            })


        });





    }

}

function handleIncrement(element) {
    const itemIndex = selectedItems.findIndex((item) => item.name === element.name);

    if (itemIndex === -1) {
        // Add new item to selectedItems
        selectedItems.push({ ...element, quantity: 1 });
    } else {
        // Increment quantity of existing item
        selectedItems[itemIndex].quantity++;
    }

    // Update the selected items list
    updateSelectedItemsList();
}


function handleDecrement(element) {
    const itemIndex = selectedItems.findIndex((item) => item.name === element.name);

    if (itemIndex !== -1) {
        // Decrement quantity of existing item
        selectedItems[itemIndex].quantity--;

        // Remove item if quantity is 0
        if (selectedItems[itemIndex].quantity === 0) {
            selectedItems.splice(itemIndex, 1);

        }

        // Update the selected items list
        updateSelectedItemsList();
    }
}




function renderFoodItems() {
    const section = document.getElementById("section1");

    userData.forEach((element) => {
        // Create a column for each food item
        const col = document.createElement("div");
        col.classList.add("col-md-4"); // Each column takes 4 out of 12 columns (3 columns per row)

        const foodItem = document.createElement("div");
        foodItem.classList.add("food-item", "card", "h-10");

        // Food image
        const img = document.createElement("img");
        img.src = element.image.desktop;
        img.classList.add("card-img-top");
        foodItem.appendChild(img);


        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Quantity controls
         const quantityControl = document.createElement("div");
        quantityControl.classList.add("d-flex", "gap-2", "addorginal", "rounded-pill", "mx-4");

        // Decrement button
        const decrementButton = document.createElement("button");
        decrementButton.classList.add("rounded-circle", "rounded-0", "decrebt");
        const decrementImg = document.createElement("img");
        decrementImg.src = "./assets/images/icon-decrement-quantity.svg";
        decrementButton.appendChild(decrementImg);
        decrementButton.style.display = "none"; // Initially hidden
         quantityControl.appendChild(decrementButton);
        

        // Add to cart button
        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("btn-addto");
        const addToCartImg = document.createElement("img");
        addToCartImg.src = "./assets/images/icon-add-to-cart.svg";
        addToCartButton.appendChild(addToCartImg);
        const addToCartText = document.createElement("span");
        addToCartText.textContent = "Add to Cart";
    
        addToCartButton.appendChild(addToCartText);
         quantityControl.appendChild(addToCartButton);

        // Increment button
        const incrementButton = document.createElement("button");
        incrementButton.classList.add("rounded-circle", "rounded-0", "increbt");
        const incrementImg = document.createElement("img");
        incrementImg.src = "./assets/images/icon-increment-quantity.svg";
        incrementButton.appendChild(incrementImg);
        incrementButton.style.display = "none"; // Initially hidden
         quantityControl.appendChild(incrementButton);
      
        cardBody.appendChild(quantityControl);


        // Category, name, and price
        const category = document.createElement("p");
        category.textContent = element.category;
        category.classList.add("card-text", "text-muted");
        cardBody.appendChild(category);

        const name = document.createElement("p");
        name.textContent = element.name;
        name.classList.add("card-title");
        cardBody.appendChild(name);

        const price = document.createElement("p");
        price.textContent = `$${element.price.toFixed(2)}`;
        price.classList.add("card-text", "fw-bold");
        cardBody.appendChild(price);


        // Show increment and decrement buttons when "Add to Cart" is clicked
        addToCartButton.addEventListener("click", () => {
            addToCartText.textContent = "1"; // Reset quantity
        
            quantityControl.classList.add("quantitybg");
           
            decrementButton.style.display = "inline";
            incrementButton.style.display = "inline";
            addToCartButton.classList.add("clicked");
            
            
            
            handleIncrement(element); // Add item to selected items
        });

        // Increment quantity
        incrementButton.addEventListener("click", () => {
            handleIncrement(element);
            addToCartText.textContent = selectedItems.find((item) => item.name === element.name)?.quantity || "0";

        });

        // Decrement quantity
        decrementButton.addEventListener("click", () => {
            handleDecrement(element);
            const item = selectedItems.find((item) => item.name === element.name);
            if (item) {
                addToCartText.textContent = item.quantity;
            } else {
                quantityControl.classList.add("decrebg");
                addToCartButton.classList.add("other");
                addToCartImg.style.display = "inline";
                addToCartText.textContent = "Add to Cart";
                decrementButton.style.display = "none";
                incrementButton.style.display = "none";
                
            }

           
        });

        foodItem.appendChild(cardBody);

        col.appendChild(foodItem);

        section.appendChild(col);
    });

}

// Render food items
renderFoodItems();