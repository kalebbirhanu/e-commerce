


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






let selectedItems = [];

function updateSelectedItemsList() {
    const selectedAmount = document.getElementById("your-Cart");
    const selectedItemsList = document.getElementById("selected-items-list");
    const carbonFreeSection = document.getElementById("carbon-free");
    const confirmOrderSection = document.getElementById("confirm-order");

    // Clear the list
    selectedItemsList.innerHTML = "";

    let totalQuantity = 0;
    let totalPrice = 0;

    // Add each selected item to the list
    selectedItems.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("d-flex", "justify-content-between", "border-bottom", "pb-2", "mb-2");

        const cardBody = document.createElement("div");
        cardBody.classList.add("d-flex", "align-items-center", "gap-2");
        const cardTexts = document.createElement("div");

        
       

        // Item name
        const itemName = document.createElement("p");
        itemName.textContent = item.name;
        cardTexts.appendChild(itemName);


        
        // Item quantity and price
        const itemquantity = document.createElement("p");
       itemquantity.classList.add("itemquantity");
        itemquantity.textContent = `X${item.quantity}   @$${item.price}   $${item.price * item.quantity}`;
        cardTexts.appendChild(itemquantity);

       
        
        //remove item
        const removeItem = document.createElement("button");
        const removeimg = document.createElement("img");
        removeimg.classList.add("text-center");
        removeItem.classList.add("remove", "rounded-circle", "round-0", "ms-auto", "btn-sm");
        removeimg.src = "./assets/images/icon-remove-item.svg";
        removeimg.style.width = "0.5rem";
        removeimg.style.height = "1rem";
        // removeItem.style.width = "1.5rem";
        //  removeItem.style.height = "2rem";
        removeItem.appendChild(removeimg);

        removeItem.addEventListener("click", function () {
           selectedItems = selectedItems.filter((i) => i.name !== item.name);
            updateSelectedItemsList();
        })
        cardBody.appendChild(cardTexts);
        

  card.appendChild(cardBody);
 card.appendChild(removeItem);

        // Append itemname to the list item
       
       

        // Append the list item to the selected items list
        
        selectedItemsList.appendChild(card);
       
        
        // Update total quantity and price
        totalQuantity += item.quantity;
        totalPrice += (item.price * item.quantity);
    });

    // Update the cart amount
    selectedAmount.textContent = `Your Cart (${totalQuantity})`;

    // Update the total price
    const totalmoney = document.createElement("div");
    totalmoney.classList.add("d-flex", "justify-content-between", "fw-bold", "fs-5", "mt-2");
    totalmoney.innerHTML = `<p>Order Total</p><p>$${totalPrice}</p>`;

    selectedItemsList.appendChild(totalmoney);

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
        confirmButton.classList.add("btn", "mx-auto", "w-100",  "rounded-pill");
        confirmOrderSection.appendChild(confirmButton);


        confirmButton.addEventListener("click", function () {


              confirmButton.setAttribute("data-bs-toggle", "modal");
              confirmButton.setAttribute("data-bs-target", "#staticBackdrop");

           const listofselected = document.getElementById("modal-list");
            
            listofselected.innerHTML = "";
            selectedItems.forEach((item) => {
            const card = document.createElement("div");
                card.classList.add("d-flex", "justify-content-between", "border-bottom", "pb-2", "mb-2");
            const cardBody = document.createElement("div"); 
                cardBody.classList.add("d-flex", "align-items-center", "gap-2");
            const cardTexts = document.createElement("div");
                // modal image
                
                const modalimg = document.createElement("img");
                modalimg.classList.add("w-15", "h-15", "rounded");
                modalimg.src = item.image.desktop;
                modalimg.style.width = "40px";
                modalimg.style.height = "40px";
                cardBody.appendChild(modalimg);

                // modal texts
               
                const listedone = document.createElement("p"); 
                listedone.classList.add("listdone");
               
                listedone.textContent = `${(item.name)}`;
              
                cardTexts.appendChild(listedone);

                
                // quantity of selected element
                const quantity = document.createElement("p");
                quantity.classList.add("quantity");
               quantity.textContent = `X${item.quantity}  @${item.price}`;
              
               cardTexts.appendChild(quantity);
               
               
               cardBody.appendChild(cardTexts);
               
                // element price
                const elements = document.createElement("p"); 
                elements.classList.add("elements", "ms-auto");
                 let eachElementwithQuantityPrice = item.price * item.quantity;
                 elements.textContent = `$${eachElementwithQuantityPrice}`;

                 card.appendChild(cardBody);
               
                 card.appendChild(elements);


               listofselected.appendChild(card);
               
                 
               
                
 })


            const totalRow = document.createElement("div");
            totalRow.classList.add("d-flex", "justify-content-between", "fw-bold", "fs-5", "mt-2");
            totalRow.innerHTML = `<p>Order Total</p><p>$${totalPrice}</p>`;

            listofselected.appendChild(totalRow);

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
            
            
            
            // handleIncrement(element); // Add item to selected items
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